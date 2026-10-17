import React from "react";

export function HomePage() {
  return (
    <div className="fade-in site-root">
      <style>{`
        /* PAGE LOAD ANIMATION */

        .fade-in {
          opacity: 0;
          transform: translateY(18px);
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* RESET & BASE */

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #ffffff;
        }

        .site-root {
          font-family: Georgia, "Times New Roman", serif;
          color: #111111;
          text-align: center;
          overflow-x: hidden;
          background: #ffffff;
          width: 100%;
        }

        /* HERO SECTION */

        .hero {
          min-height: 100vh;
          padding: 30px 24px 55px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .hero-img-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 12px;
          background: #ffffff;
        }

        /* LARGER FIRST IMAGE */

        .hero-img {
          display: block;
          width: min(450px, 90vw);
          height: auto;
          object-fit: contain;
          border-radius: 0;
          box-shadow: none;
          background: transparent;
        }

        .name,
        h1.name {
          font-size: clamp(2.5rem, 6vw, 4.2rem);
          font-weight: 700;
          color: #7a0c0c;
          margin: 0 0 10px;
          line-height: 1.1;
          letter-spacing: 0.5px;
        }

        .pronouns {
          font-size: 0.8rem;
          letter-spacing: 2px;
          margin-bottom: 20px;
          opacity: 0.8;
        }

        .tagline,
        h2.tagline {
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          font-style: italic;
          font-weight: normal;
          letter-spacing: 1px;
          line-height: 1.7;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 12px;
          opacity: 0.9;
        }

        /* HOMEPAGE INTRODUCTION */

        .home-intro {
          max-width: 800px;
          margin: 25px auto 0;
          padding: 0 12px;
        }

        .home-intro p {
          font-size: clamp(1.15rem, 1.7vw, 1.3rem);
          line-height: 1.8;
          margin: 0;
          color: #333333;
        }

        .home-intro strong {
          color: #7a0c0c;
          font-weight: 700;
        }

        /* MORE ABOUT ME BUTTON */

        .intro-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
          padding: 14px 26px;
          background: #7a0c0c;
          color: #ffffff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.05rem;
          font-weight: 600;
          letter-spacing: 0.2px;
          line-height: 1.4;
          text-decoration: none;
          border: 1px solid #7a0c0c;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(122, 12, 12, 0.12);
          transition:
            background 0.25s ease,
            color 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            transform 0.25s ease;
        }

        .intro-link .arrow {
          display: inline-block;
          font-size: 1.2rem;
          line-height: 1;
          transition: transform 0.25s ease;
        }

        .intro-link:hover {
          background: #ffffff;
          color: #7a0c0c;
          border-color: #7a0c0c;
          box-shadow: 0 7px 18px rgba(122, 12, 12, 0.14);
          transform: translateY(-2px);
        }

        .intro-link:hover .arrow {
          transform: translateY(3px);
        }

        .intro-link:focus-visible {
          outline: 3px solid rgba(122, 12, 12, 0.35);
          outline-offset: 4px;
        }

        /* DIVIDER */

        .divider {
          height: 14px;
          background: #f2f2f2;
        }

        /* ABOUT SECTION */

        .about-wrapper {
          background: #f2f2f2;
          width: 100%;
        }

        .about {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 48px 120px;
          display: grid;
          grid-template-columns: minmax(280px, 430px) 1fr;
          gap: 75px;
          align-items: center;
          text-align: left;
        }

        .about-img {
          width: 100%;
          max-width: 430px;
          height: auto;
          display: block;
          margin: 0 auto;
          border-radius: 12px;
          object-fit: cover;
        }

        .about h2 {
          font-size: clamp(2rem, 4vw, 3.1rem);
          color: #7a0c0c;
          margin: 0 0 28px;
          letter-spacing: 0.6px;
        }

        .about p {
          font-size: clamp(1rem, 1.4vw, 1.15rem);
          line-height: 1.9;
          margin: 0 0 22px;
        }

        /* RESUME BUTTON */

        .resume-btn {
          display: inline-block;
          margin-top: 12px;
          padding: 16px 32px;
          background: #000000;
          color: #ffffff;
          border: none;
          font-size: 17px;
          font-family: Georgia, "Times New Roman", serif;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .resume-btn:hover {
          opacity: 0.85;
          transform: translateY(-2px);
        }

        /* TABLET */

        @media (max-width: 1024px) {
          .hero {
            min-height: auto;
            padding: 45px 24px 55px;
          }

          .hero-img {
            width: min(390px, 85vw);
          }

          .about {
            grid-template-columns: 1fr;
            gap: 45px;
            padding: 80px 40px 100px;
            text-align: center;
          }

          .about-img {
            width: 80%;
            max-width: 440px;
          }

          .about p {
            text-align: left;
          }
        }

        /* MOBILE */

        @media (max-width: 768px) {
          .hero {
            padding: 35px 20px 45px;
          }

          .hero-img {
            width: min(340px, 84vw);
          }

          .hero-img-wrapper {
            margin-bottom: 14px;
          }

          .name,
          h1.name {
            font-size: clamp(2.3rem, 9vw, 3.3rem);
          }

          .pronouns {
            margin-bottom: 18px;
          }

          .tagline,
          h2.tagline {
            max-width: 480px;
            font-size: 1.05rem;
            letter-spacing: 0.8px;
          }

          .home-intro {
            max-width: 560px;
            margin-top: 22px;
            padding: 0 5px;
          }

          .home-intro p {
            font-size: 1.1rem;
            line-height: 1.8;
          }

          .intro-link {
            margin-top: 22px;
            padding: 13px 23px;
            font-size: 1rem;
          }

          .about {
            padding: 65px 24px 80px;
            gap: 35px;
          }

          .about-img {
            width: 100%;
            max-width: 380px;
          }

          .about h2 {
            text-align: center;
            margin-bottom: 24px;
          }

          .about p {
            font-size: 1rem;
            text-align: left;
          }

          .resume-btn {
            width: 100%;
            max-width: 320px;
            padding: 16px 24px;
            font-size: 16px;
            text-align: center;
          }
        }

        /* SMALL PHONES */

        @media (max-width: 480px) {
          .hero {
            padding: 25px 18px 38px;
          }

          .hero-img {
            width: min(290px, 82vw);
          }

          .name,
          h1.name {
            font-size: clamp(2.15rem, 9vw, 2.7rem);
            letter-spacing: 0;
          }

          .pronouns {
            font-size: 0.72rem;
            letter-spacing: 1.5px;
            margin-bottom: 16px;
          }

          .tagline,
          h2.tagline {
            max-width: 350px;
            font-size: 0.92rem;
            line-height: 1.8;
            letter-spacing: 0.5px;
          }

          .home-intro {
            margin-top: 19px;
          }

          .home-intro p {
            font-size: 1.05rem;
            line-height: 1.8;
          }

          .intro-link {
            margin-top: 19px;
            padding: 12px 20px;
            font-size: 0.98rem;
            border-radius: 5px;
          }

          .about {
            padding: 55px 20px 70px;
          }

          .about-img {
            max-width: 280px;
          }

          .about h2 {
            font-size: 2rem;
          }

          .about p {
            font-size: 0.98rem;
            line-height: 1.8;
          }
        }

        /* SHORT DESKTOP SCREENS */

        @media (min-width: 769px) and (max-height: 850px) {
          .hero {
            min-height: 100vh;
            padding-top: 20px;
            padding-bottom: 30px;
          }

          .hero-img {
            width: min(340px, 42vh);
          }

          .hero-img-wrapper {
            margin-bottom: 8px;
          }

          .pronouns {
            margin-bottom: 13px;
          }

          .home-intro {
            margin-top: 18px;
          }

          .home-intro p {
            font-size: 1.15rem;
            line-height: 1.7;
          }

          .intro-link {
            margin-top: 16px;
          }
        }

        /* REDUCED MOTION ACCESSIBILITY */

        @media (prefers-reduced-motion: reduce) {
          .fade-in {
            animation: none;
            opacity: 1;
            transform: none;
          }

          html {
            scroll-behavior: auto;
          }

          .intro-link,
          .intro-link .arrow,
          .resume-btn {
            transition: none;
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
          COMPUTERPHILE | SOCIAL ENTREPRENEUR | POLICY RESEARCHER
        </h2>

        {/* HOMEPAGE INTRODUCTION */}

        <div className="home-intro">
          <p>
            I work at the intersection of{" "}
            <strong>
              technology, education, and social development.
            </strong>{" "}
          </p>

          <a href="#about-me" className="intro-link">
            More about me
            <span className="arrow" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
      </section>

      <div className="divider" />

      {/* FULL ABOUT SECTION */}

      <section className="about-wrapper" id="about-me">
        <div className="about">
          <img
            src="/images/AryanBasnet_founder_final.png"
            alt="Aryan Basnet, Founder of Vidhata"
            className="about-img"
          />

          <div>
            <h2>ABOUT ME</h2>

            <p>
              Hi! I’m Aryan Basnet, a graduate of Rato Bangala School.
              I am a social entrepreneur and the founder of Vidhata,
              a nonprofit organization dedicated to providing holistic
              educational opportunities to underserved students across
              Nepal. Working with a team of young volunteers, I help
              develop programs that bring practical learning and
              skill-building opportunities to students beyond the
              traditional classroom.
            </p>

            <p>
              My work also includes AI engineering and education policy
              research. I am interested in understanding how technology,
              research, and better-designed systems can address
              real-world challenges. By bringing together technology,
              education, and social entrepreneurship, I hope to develop
              meaningful solutions that expand access to learning and
              create greater opportunities for underserved communities.
            </p>

            <a
              href="/images/AryanBasnet_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              Check out my resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
