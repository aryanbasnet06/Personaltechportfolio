// FILE: src/pages/HomePage.tsx

export function HomePage() {
  return (
    <div className="fade-in site-root">
      <style>{`
        /* ==============================
           PAGE LOAD ANIMATION
        ============================== */
        .fade-in {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeInUp 1.15s ease-out forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ==============================
           RESET & BASE
        ============================== */
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          background: #ffffff;
        }

        /* ==============================
           GLOBAL TYPOGRAPHY
        ============================== */
        .site-root {
          font-family: Georgia, "Times New Roman", serif;
          color: #111;
          text-align: center;
        }

        /* ==============================
           HERO SECTION (MOVED UP)
        ============================== */
        .hero {
          padding: 110px 24px 48px; /* reduced top padding */
        }

        .name {
          font-size: 72px;
          font-weight: 700;
          color: #7a0c0c;
          margin-bottom: 16px;
          letter-spacing: 0.5px;
        }

        .pronouns {
          font-size: 15px;
          letter-spacing: 2px;
          margin-bottom: 40px;
          opacity: 0.85;
        }

.hero-img-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.hero-img {
  width: 380px;              /* Increased size */
  max-width: 90%;            /* Responsive scaling */
  height: auto;
  object-fit: cover;         /* Keeps proportions clean */
  border-radius: 12px;       /* Smooth modern edges */
  box-shadow: 0 8px 20px rgba(0,0,0,0.15); /* Soft premium shadow */
}


        .tagline {
          font-size: 18px;
          font-style: italic;
          letter-spacing: 1.6px;
          opacity: 0.9;
        }

        /* ==============================
           DIVIDER
        ============================== */
        .divider {
          height: 16px;
          background: #f2f2f2;
        }

        /* ==============================
           ABOUT – FULL WIDTH SECTION
        ============================== */
        .about-wrapper {
          background: #f2f2f2;
          width: 100%;
          margin-top: -44px;
        }

        .about {
          max-width: 1200px;
          margin: 0 auto;
          padding: 110px 48px 160px;
          display: grid;
          grid-template-columns: 460px 1fr;
          gap: 80px;
          align-items: start;
          text-align: left;
        }

        .about-img {
          width: 100%;
          border-radius: 2px;
        }

        .about h2 {
          font-size: 52px;
          color: #7a0c0c;
          margin: -10px 0 32px;
          letter-spacing: 0.6px;
        }

        .about p {
          font-size: 20px;
          line-height: 1.85;
          margin-bottom: 26px;
        }

        /* ==============================
           BUTTON
        ============================== */
        .resume-btn {
          margin-top: 32px;
          padding: 18px 40px;
          background: #000;
          color: #fff;
          border: none;
          font-size: 18px;
          cursor: pointer;
          transition: opacity 0.25s ease;
        }

        .resume-btn:hover {
          opacity: 0.85;
        }
      `}</style>

      {/* ==============================
          HERO SECTION
      ============================== */}
      <section className="hero">
        <div className="hero-img-wrapper">
          <img
            src="images/aryanbasnet_final_image_1.png"
            alt="Vidhi Miglani speaking"
            className="hero-img"
          />
        </div>
        <div className="name">Aryan Basnet</div>
        <div className="pronouns">PRONOUNS: HE / HIM</div>

        <div className="tagline">
          COMPUTERPHILE | SOCIAL ENTREPRENEUR | ARTIST
        </div>
      </section>

      <div className="divider" />

      {/* ==============================
          ABOUT SECTION
      ============================== */}
      <section className="about-wrapper">
        <div className="about">
          <img
            src="/images/aryanbasnet_1.png"
            alt="aryan basnet photo"
            className="about-img"
          />

          <div>
            <h2>ABOUT ME</h2>

            <p>
              Hi! I’m Aryan Basnet, graduate of Rato Bangala School. As a social
              entrepreneur, I'm the founder of a non-profit aiding in providing
              holistic education to disadvantaged students called ‘Vidhata’.
            </p>
            <p>
              With key expertise in social design, human-centric design, design
              thinking, and organizational leadership, I hope to spearhead
              change in my community through being an inventor. Using technology
              and design thinking as my foothold for innovation, I approach
              every problem with a unique 360-degree view that keeps the user at
              the centre of solution building.
            </p>
            <p>
              I describe myself as an Artist at heart. I'm a semi-professional
              artist with 12 years of experience in Fine Art. I hope to build
              every venture on this foundation of left and right brain
              abilities.
            </p>
            <a
              href="https://docs.google.com/document/d/1cQZ2WPyHhvMtswRcPlpzA0tDWr26PqCdDeZoNvEQnes/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <button className="resume-btn">Check out my resume</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
