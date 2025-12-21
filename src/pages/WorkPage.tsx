import React from "react";

export function WorkPage() {
  return (
    <div className="work-root">
      <style>{`
        /* ------------------ PAGE-LOAD ANIMATION ------------------ */
        .work-root {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1.2s ease-out forwards;
          font-family: Georgia, "Times New Roman", serif;
          color: #2b2b2b;
          line-height: 1.6;
        }

        .title-main-entrepreneurial {
          margin-top: 40px;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ------------------ TITLES ------------------ */
        .title-main {
          font-size: 56px;
          text-align: center;
          font-weight: 700;
          letter-spacing: 1px;
          color: #6b0f0f;
          margin-bottom: 50px;
        }

        .title-sub {
          font-size: 28px;
          color: #6b0f0f;
          font-weight: 700;
          margin-bottom: 25px;
          text-align: center;
          letter-spacing: 0.5px;
        }

        /* ------------------ SECTIONS ------------------ */
        .section {
          padding: 90px 40px;
        }

        .section-white {
          background: #ffffff;
        }

        .section-grey {
          background: #f4f4f4;
        }

        /* ------------------ FLEX LAYOUT ------------------ */
        .content-flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
          gap: 50px;
        }

        .text-block {
          flex: 1;
          min-width: 340px;
          max-width: 700px;
        }

        .text-block p {
          font-size: 20px;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .text-block ul {
          font-size: 18px;
          padding-left: 22px;
          margin-top: 10px;
          list-style-type: disc;
        }

        .text-block li {
          margin-bottom: 12px;
        }

        /* ------------------ IMAGE BLOCK ------------------ */
        .single-image-block {
          flex: 0 0 360px;
          text-align: center;
          transform: translateY(10px);
        }

        .single-image-block img {
          width: 100%;
          border-radius: 18px;
          height: 320px;
          object-fit: cover;
          box-shadow: 0px 10px 26px rgba(0, 0, 0, 0.15);
          transition: transform 0.35s ease;
        }

        .single-image-block img:hover {
          transform: scale(1.04);
        }

        /* ------------------ PHOTO GRID ------------------ */
        .photo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-top: 40px;
        }

        .photo-grid img {
          width: 100%;
          height: 210px;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0px 6px 20px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }

        .photo-grid img:hover {
          transform: scale(1.03);
        }

        @media (max-width: 900px) {
          .content-flex { flex-direction: column; }
        }
      `}</style>

      {/* ------------------ ENTREPRENEURIAL EXPERIENCE ------------------ */}
      <div className="section section-white">
        <h1 className="title-main title-main-entrepreneurial">
          Entrepreneurial Experience
        </h1>

        <h2 className="title-sub">
          Nabil School of Social Entrepreneurship Fellowship Program
        </h2>

        <div className="content-flex">
          <div className="text-block">
            <p>
              I was selected to join the Nabil School of Social
              Entrepreneurship, where I participated in weekly sessions
              exploring socially driven, scalable ventures. The program
              strengthened my leadership approach and deepened my understanding
              of sustainable innovation.
            </p>

            <ul>
              <li>
                Gained practical experience in identifying community needs
                through structured field interviews and root-cause analysis
                methods.
              </li>
              <li>
                Learned to design a clear and sustainable business model
                supported by realistic budgeting and resource planning.
              </li>
              <li>
                Developed a strong understanding of how to measure and evaluate
                the social impact of community-focused projects.
              </li>
              <li>
                Built skills in crafting and delivering confident, polished
                pitches for social enterprise and startup ideas.
              </li>
            </ul>
          </div>

          <div className="single-image-block">
            <img src="/images/nabil_fellowship.jpeg" alt="Nabil School" />
          </div>
        </div>

        <div className="photo-grid">
          <img src="/images/presentation.jpeg" alt="Nabil Event 1" />
          <img src="/images/session1.jpeg" alt="Nabil Event 2" />
          <img src="/images/session2.jpeg" alt="Nabil Event 3" />
          <img src="/images/session_best.jpeg" alt="Nabil Event 4" />
        </div>
      </div>

      {/* ------------------ WORK EXPERIENCE ------------------ */}
      <div className="section section-grey">
        <h1 className="title-main">Work Experience</h1>

        <h2 className="title-sub">
          Project Coordinator: Urban TB Control Initiative, Japan-Nepal Health
          and Tuberculosis Research Association
        </h2>

        <div className="content-flex">
          <div className="single-image-block">
            <img src="/images/jantra-logo.png" alt="JANTRA" />
          </div>

          <div className="text-block">
            <p>
              During my role as Project Coordinator for the Urban TB Control
              Initiative at JANTRA, I worked on strengthening diagnostic access
              and community-level TB surveillance in high-density urban areas.
            </p>

            <ul>
              <li>
                Collaborated with medical officers and field teams to oversee
                AI-assisted X-ray screening and TB-LAMP testing.
              </li>
              <li>
                Led screening operations reaching over 2,500 individuals and
                ensured effective linkage to treatment.
              </li>
              <li>
                Trained 52 healthcare staff on diagnostic protocols and
                reporting systems.
              </li>
              <li>
                Organized and facilitated 12 structured review meetings to
                refine strategies and track progress.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ------------------ AI ENGINEER ------------------ */}
      <div className="section section-white">
        <h2 className="title-sub">AI Engineer, Hello World IT Solutions</h2>

        <div className="content-flex">
          <div className="text-block">
            <p>As an AI Engineer, I worked on the following:</p>

            <ul>
              <li>
                Developed an AI model diagnosing Pneumonia and Tuberculosis
                using 7,132 chest X-ray images.
              </li>
              <li>
                Built a lightweight architecture with 3.7 million parameters.
              </li>
              <li>Achieved 94% overall diagnostic accuracy.</li>
              <li>
                Received validation from medical experts for clinical
                applicability.
              </li>
            </ul>
          </div>

          <div className="single-image-block">
            <img
              src="/images/hello-world-it-solutions-logo.png"
              alt="Hello World IT Solutions"
            />
          </div>
        </div>
      </div>

      {/* ------------------ INTERNSHIP ------------------ */}
      <div className="section section-grey">
        <h1 className="title-main">Internship</h1>

        <h2 className="title-sub">Product Design Intern, Billion Bricks</h2>

        <div className="content-flex">
          <div className="single-image-block">
            <img src="/images/billion-bricks-logo.png" alt="Billion Bricks" />
          </div>

          <div className="text-block">
            <p>
              At Billion Bricks, I worked on practical design tasks tied to real
              projects, collaborating closely with the team and contributing to
              early sustainable housing concepts.
            </p>

            <ul>
              <li>
                Designed digital tokens with the CEO for the World Trade
                Conference.
              </li>
              <li>
                Conducted user research on sustainable housing challenges.
              </li>
              <li>Translated research insights into early design concepts.</li>
              <li>Created and refined prototypes using Blender and Sketch.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
