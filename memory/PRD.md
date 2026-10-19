# PRD — Aryan Basnet Portfolio Redesign

## Original problem statement
Redesign my existing personal technology portfolio website, aryanbasnet2006.com.np, into a beautiful, modern, professional, visually engaging, and fully responsive website, preserving the existing theme, color palette, written content, personal information and identity. Add a new project "Titan City" (Educational Game / EdTech; "An interactive educational game that teaches students about the solar system through engaging missions and gameplay."; video https://www.youtube.com/watch?v=Ng4upY_2MVQ; image = attached Titan City image). Keep separate pages, accessible, responsive, performant, preserve SEO. (Full brief in conversation.)

## User choices
- Titan City image: use frame from the YouTube video thumbnail (attachment not received)
- Contact form: save submissions to DB
- Each page gets its own URL
- Titan City first on Projects, embedded video

## Architecture
- React (CRA) + react-router: /, /community, /art, /projects, /leadership, /work, /contact, 404
- Content centralised in src/data/content.js (verbatim from live site)
- framer-motion reveals, Lenis smooth scroll (disabled on reduced motion), masked hero line reveal, 3D tilt + parallax portrait, slow marquee
- Fonts: Newsreader (serif, replaces Georgia) + Hanken Grotesk (body)
- Images downloaded from live site into public/images, optimized WebP in public/images/opt
- FastAPI: POST /api/contact (public), GET /api/contact (X-Admin-Token header, ADMIN_TOKEN in backend/.env); Mongo collection contact_messages

## Implemented (2026-10-19)
- Full redesign of all 7 pages, SVG AB monogram + favicon, maroon footer, mobile full-screen menu
- Titan City featured section (click-to-play YouTube embed + Watch Demo link) and home teaser
- Contact form wired to backend with toasts
- SEO meta/OG/JSON-LD/canonical preserved and extended; per-page titles

## Iteration 2 (2026-10-19)
- Landing hero rebuilt to match user's reference screenshot (cream bg, hairlines, "FIG. 01" tilted photo card, rotating badge, black/outline pill CTAs)
- Fonts: Cormorant Garamond + Geist + Geist Mono; warm cream palette site-wide; Λ logo lockup + favicon
- Tech motion: decode/scramble mono labels, blinking cursor, scan line on portrait, sweep line on hero grid
- Removed Titan City teaser from home; removed Art & Culture from header/footer/explore (/art still reachable by URL)

## Backlog
- P1: Replace Titan City thumbnail with user's actual image when provided
- P1: Simple admin page to read contact submissions
- P2: Email notification on new contact submission; sitemap.xml/robots.txt
