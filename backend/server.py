from fastapi import FastAPI, APIRouter, Header, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
import os
import secrets
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr, BeforeValidator
from typing import List, Optional, Annotated
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

client = AsyncIOMotorClient(os.environ['MONGO_URL'])
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

PyObjectId = Annotated[str, BeforeValidator(lambda v: str(v) if isinstance(v, ObjectId) else v)]


class BaseDocument(BaseModel):
    model_config = ConfigDict(populate_by_name=True)
    id: Optional[PyObjectId] = Field(default=None, alias="_id")

    def to_mongo(self) -> dict:
        data = self.model_dump(by_alias=True, exclude_none=True)
        data.pop("_id", None)
        return data

    @classmethod
    def from_mongo(cls, doc: dict):
        return cls.model_validate(doc)


class ContactIn(BaseModel):
    first_name: str = Field(min_length=1, max_length=80)
    last_name: str = Field(default="", max_length=80)
    email: EmailStr
    phone: str = Field(default="", max_length=40)
    message: str = Field(default="", max_length=4000)


class ContactMessage(BaseDocument):
    first_name: str
    last_name: str = ""
    email: str
    phone: str = ""
    message: str = ""
    created_at: str


@api_router.get("/")
async def root():
    return {"message": "ok"}


@api_router.post("/contact", status_code=201)
async def create_contact(payload: ContactIn):
    msg = ContactMessage(**{k: v.strip() if isinstance(v, str) else v for k, v in payload.model_dump().items()},
                         created_at=datetime.now(timezone.utc).isoformat())
    res = await db.contact_messages.insert_one(msg.to_mongo())
    return {"id": str(res.inserted_id), "ok": True}


@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contacts(x_admin_token: str = Header(default="")):
    if not secrets.compare_digest(x_admin_token, os.environ['ADMIN_TOKEN']):
        raise HTTPException(status_code=401, detail="Unauthorized")
    docs = await db.contact_messages.find().sort("created_at", -1).to_list(500)
    return [ContactMessage.from_mongo(d) for d in docs]


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
