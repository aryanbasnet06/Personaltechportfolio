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

        .site-root {
          font-family: Georgia, "Times New Roman", serif;
          color: #111;
          text-align: center;
          overflow-x: hidden;
        }

        /* ==============================
           HERO SECTION
        ============================== */
        .hero {
          padding: 120px 24px 60px;
        }

        .hero-img-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 40px;
        }

        .hero-img {
          width: min(380px, 90vw);
          height: auto;
          object-fit: cover;
          border-radius: 999px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .name,
        h1.name {
          font-size: clamp(2.5rem, 7vw, 4.5rem);
          font-weight: 700;
          color: #7a0c0c;
          margin: 0 0 16px;
          line-height: 1.1;
          letter-spacing: 0.5px;
        }

        .pronouns {
          font-size: clamp(0.75rem, 1.5vw, 0.95rem);
          letter-spacing: 2px;
          margin-bottom: 32px;
          opacity: 0.85;
        }

        .tagline,
        h2.tagline {
          font-size: clamp(0.9rem, 2vw, 1.15rem);
          font-style: italic;
          font-weight: normal;
          letter-spacing: 1.2px;
          line-height: 1.7;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 16px;
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
          padding: 110px 48px 140px;

          display: grid;
          grid-template-columns: minmax(320px, 460px) 1fr;
          gap: 80px;

          align-items: center;
          text-align: left;
        }

        .about-img {
          width: 100%;
          max-width: 460px;
          height: auto;
          display: block;
          margin: 0 auto;
          border-radius: 12px;
          object-fit: cover;
}

        .about h2 {
          font-size: clamp(2rem, 5vw, 3.25rem);
          color: #7a0c0c;
          margin: 0 0 32px;
          letter-spacing: 0.6px;
        }

        .about p {
          font-size: clamp(1rem, 1.6vw, 1.25rem);
          line-height: 1.9;
          margin-bottom: 24px;
        }

        /* ==============================
           BUTTON
        ============================== */
        .resume-btn {
          margin-top: 12px;
          padding: 18px 40px;
          background: #000;
          color: #fff;
          border: none;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .resume-btn:hover {
          opacity: 0.85;
          transform: translateY(-2px);
        }

        /* ==============================
           TABLET
        ============================== */
       @media (max-width: 1024px) {
  .hero {
    padding: 100px 24px 50px;
  }

  .about {
    grid-template-columns: 1fr;
    gap: 50px;
    padding: 90px 40px 110px;
    text-align: center;
  }

  .about-img {
    width: 80%;
    max-width: 500px;
    margin: 0 auto;
  }

  .about p {
    text-align: left;
  }
}

        /* ==============================
           MOBILE
        ============================== */
        @media (max-width: 768px) {
  .hero {
    padding: 80px 20px 40px;
  }

  .hero-img {
    width: min(260px, 80vw);
  }

  .tagline,
  h2.tagline {
    max-width: 320px;
    margin: 0 auto;
  }

  .about {
    padding: 70px 24px 90px;
    gap: 35px;
  }

  .about-img {
    width: 100%;
    max-width: 380px;
  }

  .about h2 {
    text-align: center;
  }

  .about p {
    text-align: left;
  }

  .resume-btn {
    width: 100%;
    max-width: 320px;
    padding: 16px 24px;
    font-size: 16px;
  }
}
        /* ==============================
           SMALL PHONES
        ============================== */
       @media (max-width: 480px) {
  .hero {
    padding: 70px 16px 36px;
  }

  .hero-img {
    width: min(220px, 75vw);
  }

  .tagline,
  h2.tagline {
    max-width: 280px;
    letter-spacing: 0.8px;
  }

  .about {
    padding: 60px 20px 80px;
  }

  .about-img {
    width: 100%;
    max-width: 280px;
  }

  .about h2 {
    font-size: 2rem;
  }

  .about p {
    font-size: 1rem;
  }
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
              Hi! I’m Aryan Basnet, a graduate of Rato Bangala School. As a
              social entrepreneur, I am the founder of Vidhata, a non-profit
              organization dedicated to providing holistic educational
              opportunities to disadvantaged students.
            </p>

            <p>
              With expertise in social design, human-centered design, design
              thinking, and organizational leadership, I aspire to drive
              meaningful change through innovation. By combining technology with
              design thinking, I approach challenges from a 360-degree
              perspective, ensuring that people remain at the center of every
              solution.
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
