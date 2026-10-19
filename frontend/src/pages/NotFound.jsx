import { Link } from "react-router-dom";
import { PageIntro } from "../components/Blocks";

export default function NotFound() {
  return (
    <main data-testid="page-not-found">
      <PageIntro eyebrow="404" lines={["Page not found"]} />
      <div className="container-x pb-32">
        <Link to="/" className="btn-primary focus-ring" data-testid="notfound-home-link">Back to Home</Link>
      </div>
    </main>
  );
}
