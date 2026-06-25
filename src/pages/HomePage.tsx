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
           HERO SECTION
        ============================== */
        .hero {
          padding: 110px 24px 48px;
        }

        .name,
        h1.name {
          font-size: 72px;
          font-weight: 700;
          color: #7a0c0c;
          margin-top: 0;
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
          width: 380px;
          max-width: 90%;
          height: auto;
          object-fit: cover;
          border-radius: 180px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .tagline,
        h2.tagline {
          font-size: 18px;
          font-style: italic;
          letter-spacing: 1.6px;
          opacity: 0.9;
          font-weight: normal;
          margin: 0;
        }

        /* ==============================
           DIVIDER
        ============================== */
        .divider {
          height: 16px;
          background: #f2f2f2;
        }

        /* ==============================
           ABOUT SECTION
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
          border-radius: 9px;
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

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-img-wrapper">
          <img
            src="/images/aryanbasnet.png"
            alt="Aryan Basnet"
            className="hero-img"
          />
        </div>

        <h1 className="name">Aryan Basnet</h1>

        <div className="pronouns">PRONOUNS: HE / HIM</div>

        <h2 className="tagline">
          COMPUTERPHILE | SOCIAL ENTREPRENEUR | DESIGNER
        </h2>
      </section>

      <div className="divider" />

      {/* ABOUT SECTION */}
      <section className="about-wrapper">
        <div className="about">
          <img
            src="/images/aryanbasnet.png"
            alt="Aryan Basnet"
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
