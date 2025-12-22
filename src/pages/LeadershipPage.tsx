// FILE: src/pages/LeadershipPage.tsx

export function LeadershipPage() {
  return (
    <section className="leadership-root page-transition">
      <style>{`
        /* PAGE TRANSITION */
        .page-transition {
          opacity: 0;
          transform: translateY(32px);
          animation: fadeUp 1.2s cubic-bezier(.22,.61,.36,1) forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ROOT */
        .leadership-root {
          font-family: Georgia, "Times New Roman", serif;
          color: #2b2b2b;
          background: #ffffff;
        }

        /* SECTION SPACING (REDUCED) */
        .section-white {
          background: #ffffff;
          padding: 110px 28px;
        }

        .section-grey {
          background: linear-gradient(to bottom, #f7f7f7, #f2f2f2);
          padding: 110px 28px;
        }

        .container {
          max-width: 1120px;
          margin: 0 auto;
        }

        /* SECTION HEADER */
        .section-header {
          max-width: 700px;
        }

        .tag {
          display: inline-block;
          padding: 7px 20px;
          border: 1px solid #7a0c0c;
          color: #7a0c0c;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          margin-bottom: 22px;
          text-transform: uppercase;
        }

        .section-header h1,
        .section-header h2 {
          font-size: 3rem;
          color: #7a0c0c;
          line-height: 1.22;
          margin-bottom: 22px;
        }

        .section-header p {
          font-size: 1.12rem;
          line-height: 1.95;
          color: #444;
        }

        /* HERO SPLIT */
        .hero-split {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: center;
        }

        .hero-image {
          width: 100%;
          height: 340px;
          object-fit: cover;
          border-radius: 30px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.18);
          transition: transform 0.6s ease, box-shadow 0.6s ease;
        }

        .hero-image:hover {
          transform: scale(1.035) translateY(-6px);
          box-shadow: 0 42px 86px rgba(0,0,0,0.28);
        }

        /* HIGHLIGHT BOXES */
        .highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .highlight {
          background: #ffffff;
          padding: 48px 36px;
          border-radius: 30px;
          box-shadow: 0 26px 60px rgba(0,0,0,0.08);
          text-align: center;
          position: relative;
          border: 2px solid transparent;
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border 0.35s ease;
        }

        .highlight::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 72px;
          height: 4px;
          background: #7a0c0c;
          border-radius: 4px;
        }

        .highlight:hover {
          transform: translateY(-10px) scale(1.015);
          box-shadow: 0 40px 80px rgba(0,0,0,0.14);
          border: 2px solid #7a0c0c;
        }

        .highlight h4 {
          font-size: 1.3rem;
          color: #7a0c0c;
          margin-top: 22px;
          margin-bottom: 14px;
          letter-spacing: 0.05em;
        }

        .highlight p {
          font-size: 1.04rem;
          line-height: 1.85;
          color: #444;
          max-width: 280px;
          margin: 0 auto;
        }

        /* BOXES TITLE (REDUCED GAP) */
        .boxes-title {
          text-align: center;
          font-size: 2.1rem;
          color: #7a0c0c;
          margin-bottom: 42px;
        }

        /* GALLERY */
        .gallery h2 {
          text-align: center;
          font-size: 2.6rem;
          color: #7a0c0c;
          margin-bottom: 60px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
        }

        .gallery-grid img {
          width: 120%;
          height: 240px;
          object-fit: cover;
          border-radius: 28px;
          box-shadow: 0 26px 52px rgba(0,0,0,0.16);
          transition: transform 0.55s ease, box-shadow 0.55s ease;
        }

        .gallery-grid img:hover {
          transform: scale(1.06) translateY(-8px);
          box-shadow: 0 44px 88px rgba(0,0,0,0.28);
        }

        /* CLUB FEATURE */
        .club-layout {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 80px;
          align-items: start;
        }

        .club-visual img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 34px;
          box-shadow: 0 36px 70px rgba(0,0,0,0.22);
          transition: transform 0.6s ease, box-shadow 0.6s ease;
        }

        .club-visual img:hover {
          transform: scale(1.04) translateY(-10px);
          box-shadow: 0 54px 104px rgba(0,0,0,0.34);
        }

        .club-text h2 {
          font-size: 2.9rem;
          color: #7a0c0c;
          margin-bottom: 22px;
          line-height: 1.25;
        }

        .club-text p {
          font-size: 1.12rem;
          line-height: 1.95;
          color: #444;
          max-width: 680px;
        }

        /* PROGRAMMING BOX GRID */
        .club-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        @media (max-width: 1100px) {
          .club-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 900px) {
          .hero-split,
          .highlights,
          .gallery-grid,
          .club-layout,
          .club-cards {
            grid-template-columns: 1fr;
          }

          .section-header h1,
          .section-header h2,
          .club-text h2 {
            font-size: 2.3rem;
          }

          .hero-image,
          .club-visual img {
            height: 300px;
          }
        }
      `}</style>

      {/* QUIZ TEAM — WHITE */}
      <div className="section-white">
        <div className="container hero-split">
          <div className="section-header">
            <span className="tag">Student Leadership</span>
            <h1>
              Founder & Captain
              <br />
              Rato Bangala School Quiz Team
            </h1>
            <p>
              I founded and led my school’s quiz team at the national level
              competitions, building a committed group of students united by a
              genuine interest in learning. As captain, I coordinated regular
              practice sessions, guided team strategy, and fostered a culture of
              preparation, teamwork, and intellectual curiosity.
            </p>
          </div>
          <img
            src="/images/rbs_quiz_team.jpg"
            alt="Quiz Team"
            className="hero-image"
          />
        </div>
      </div>

      {/* QUIZ BOXES — GREY */}
      <div className="section-grey">
        <div className="container">
          <h2 className="boxes-title">Roles & Responsibilities</h2>
          <div className="highlights">
            <div className="highlight">
              <h4>Founder</h4>
              <p>Conceptualized the team and its academic vision.</p>
            </div>
            <div className="highlight">
              <h4>Captain</h4>
              <p>Led the school team in national-level competitions.</p>
            </div>
            <div className="highlight">
              <h4>Mentor</h4>
              <p>Trained juniors to ensure continuity and excellence.</p>
            </div>
          </div>
        </div>
      </div>

      {/* COMPETITIONS — WHITE */}
      <div className="section-white">
        <div className="container gallery">
          <h2>Competitions & Recognition</h2>
          <div className="gallery-grid">
            <img src="/images/rbs_quiz.jpg" alt="Quiz competition" />
            <img
              src="/images/rbs_quiz_certificate_team.jpg"
              alt="Certificate"
            />
            <img src="/images/rbs_quiz_certificate.jpg" alt="Award" />
          </div>
        </div>
      </div>

      {/* PROGRAMMING PRESIDENT — GREY */}
      <div className="section-grey">
        <div className="container club-layout">
          <div className="club-visual">
            <img src="/images/gloves.jpg" alt="Assistive Glove Project" />
          </div>
          <div className="club-text">
            <span className="tag">Innovation & Impact</span>
            <h2>
              Vice President
              <br />
              Rato Bangala School Programming & Robotics Club
            </h2>
            <p>
              As the Vice President, I managed the club’s academic and technical
              activities, organizing regular coding sessions and introductory
              workshops for junior students. I focused on building strong
              fundamentals, encouraging peer learning, and guiding members
              through practical exercises and small projects to develop
              confidence in programming and robotics.
            </p>
            <br />
            <p>
              Building on this foundation, I led the team in developing a glove
              that translates sign language into text, integrating hardware and
              software components. I also led club teams in national and
              regional hackathons, coordinating project development and
              supporting focused, collaborative work under competitive
              conditions.
            </p>
          </div>
        </div>
      </div>

      {/* PROGRAMMING BOXES — WHITE */}
      <div className="section-white">
        <div className="container">
          <h2 className="boxes-title">Roles & Responsibilities</h2>
          <div className="club-cards">
            <div className="highlight">
              <h4>Assistive Glove</h4>
              <p>Wearable technology translating sign language into text.</p>
            </div>
            <div className="highlight">
              <h4>National Hackathon</h4>
              <p>First-prize winner representing RBS.</p>
            </div>
            <div className="highlight">
              <h4>Civic-Tech Platform</h4>
              <p>Web app built for a garbage-cleaning agency.</p>
            </div>
            <div className="highlight">
              <h4>Best Project Award</h4>
              <p>Winner at RBS Science Expo 2023.</p>
            </div>
          </div>
        </div>
      </div>

      {/* HACKATHONS & INNOVATION — GREY */}
      <div className="section-grey">
        <div className="container gallery">
          <h2>Robotics, Hackathons & Innovation</h2>
          <div className="gallery-grid">
            <img src="/images/hackathon.png" alt="Hackathon" />
            <img src="/images/prize.png" alt="Prize" />
            <img src="/images/hackathon3.jpg" alt="Expo" />
          </div>
        </div>
      </div>
    </section>
  );
}
