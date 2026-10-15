import React from "react";

export function WorkPage() {
  return (
    <div className="work-root">
      <style>{`
        /* ------------------ GLOBAL STYLES ------------------ */
        .work-root {
          font-family: Georgia, "Times New Roman", serif;
          color: #2b2b2b;
          line-height: 1.6;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1.2s ease-out forwards;
          overflow: hidden;
        }

        .work-root *,
        .work-root *::before,
        .work-root *::after {
          box-sizing: border-box;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ------------------ SECTION LAYOUT ------------------ */
        .section {
          padding: 90px 40px;
        }

        .section-white {
          background: #ffffff;
        }

        .section-grey {
          background: #f4f4f4;
        }

        .section-inner {
          width: 100%;
          max-width: 1450px;
          margin: 0 auto;
        }

        /* ------------------ TITLES ------------------ */
        .title-main {
          font-size: 56px;
          line-height: 1.2;
          text-align: center;
          font-weight: 700;
          letter-spacing: 1px;
          color: #6b0f0f;
          margin: 0 0 50px;
        }

        .title-main-entrepreneurial {
          margin-top: 0;
        }

        .title-sub {
          font-size: 28px;
          line-height: 1.4;
          color: #6b0f0f;
          font-weight: 700;
          margin: 0 auto 45px;
          text-align: center;
          letter-spacing: 0.3px;
          max-width: 1150px;
        }

        /* ------------------ FLEX LAYOUT ------------------ */
        .content-flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 50px;
        }

        .text-block {
          flex: 1 1 600px;
          min-width: 0;
          max-width: 1050px;
        }

        .text-block p {
          font-size: 20px;
          line-height: 1.8;
          margin: 0 0 25px;
        }

        .text-block ul {
          font-size: 18px;
          line-height: 1.8;
          padding-left: 22px;
          margin-top: 10px;
          list-style-type: disc;
        }

        .text-block li {
          padding-left: 3px;
          margin-bottom: 14px;
        }

        .text-block li::marker {
          color: #ad7158;
        }

        /* ------------------ IMAGE BLOCK ------------------ */
        .single-image-block {
          flex: 0 1 360px;
          min-width: 0;
          text-align: center;
          transform: translateY(10px);
        }

        .single-image-block img {
          display: block;
          width: 100%;
          height: 320px;
          object-fit: cover;
          border-radius: 18px;
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.15);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .single-image-block img:hover {
          transform: scale(1.04);
          box-shadow: 0 15px 32px rgba(0, 0, 0, 0.18);
        }

        /* ------------------ PHOTO GRID ------------------ */
        .photo-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
          margin-top: 45px;
        }

        .photo-grid img {
          display: block;
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .photo-grid img:hover {
          transform: scale(1.03);
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.18);
        }

        /* ------------------ NPF SECTION ------------------ */
        .npf-section {
          background: #ffffff;
        }

        .npf-content {
          justify-content: space-between;
          align-items: center;
          gap: 55px;
        }

        /* NPF logo on the LEFT */
        .npf-logo-block {
          flex: 0 0 360px;
          max-width: 360px;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: none;
        }

        .npf-logo-block img {
          display: block;
          width: 100%;
          height: 320px;
          object-fit: contain;
          padding: 20px;
          background: #ffffff;
          border-radius: 18px;
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.12);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .npf-logo-block img:hover {
          transform: scale(1.04);
          box-shadow: 0 15px 32px rgba(0, 0, 0, 0.17);
        }

        /* NPF description on the RIGHT */
        .npf-text-block {
          flex: 1 1 600px;
          max-width: 1050px;
        }

        .npf-text-block p {
          font-size: 20px;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        .npf-text-block ul {
          font-size: 18px;
          line-height: 1.8;
          padding-left: 22px;
          margin-top: 10px;
          list-style-type: disc;
        }

        .npf-text-block li {
          padding-left: 3px;
          margin-bottom: 14px;
        }

        .npf-text-block li::marker {
          color: #ad7158;
        }

        /* ------------------ RESPONSIVE DESIGN ------------------ */
        @media (max-width: 1100px) {
          .photo-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .content-flex {
            gap: 35px;
          }

          .npf-content {
            gap: 35px;
          }
        }

        @media (max-width: 900px) {
          .section {
            padding: 65px 30px;
          }

          .title-main {
            font-size: 44px;
          }

          .title-sub {
            font-size: 25px;
          }

          .content-flex {
            flex-direction: column;
            align-items: stretch;
            gap: 30px;
          }

          .text-block {
            flex: 1 1 auto;
            width: 100%;
            max-width: none;
          }

          .single-image-block {
            flex: 1 1 auto;
            width: 100%;
            max-width: 420px;
            margin: 0 auto;
          }

          .single-image-block img {
            height: 300px;
          }

          .npf-logo-block {
            flex: 1 1 auto;
            width: 100%;
            max-width: 360px;
            margin: 0 auto;
          }

          .npf-logo-block img {
            height: 280px;
          }

          .npf-text-block {
            flex: 1 1 auto;
            width: 100%;
            max-width: none;
          }
        }

        @media (max-width: 540px) {
          .section {
            padding: 48px 20px;
          }

          .title-main {
            font-size: 35px;
            margin-bottom: 32px;
          }

          .title-sub {
            font-size: 22px;
            margin-bottom: 28px;
          }

          .text-block p,
          .npf-text-block p {
            font-size: 16px;
            line-height: 1.8;
          }

          .text-block ul,
          .npf-text-block ul {
            font-size: 15px;
            line-height: 1.8;
            padding-left: 20px;
          }

          .text-block li,
          .npf-text-block li {
            margin-bottom: 12px;
          }

          .photo-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 30px;
          }

          .photo-grid img {
            height: 230px;
          }

          .single-image-block img {
            height: 260px;
          }

          .npf-logo-block img {
            height: 240px;
            padding: 15px;
          }
        }

        /* ------------------ REDUCED MOTION ------------------ */
        @media (prefers-reduced-motion: reduce) {
          .work-root {
            opacity: 1;
            transform: none;
            animation: none;
          }

          .single-image-block img,
          .photo-grid img,
          .npf-logo-block img {
            transition: none;
          }
        }
      `}</style>

      {/* =====================================================
          ENTREPRENEURIAL EXPERIENCE
      ====================================================== */}
      <div className="section section-white">
        <div className="section-inner">
          <h1 className="title-main title-main-entrepreneurial">
            Entrepreneurial Experience
          </h1>

          {/* NABIL SCHOOL OF SOCIAL ENTREPRENEURSHIP */}
          <h2 className="title-sub">
            Nabil School of Social Entrepreneurship Fellowship Program
          </h2>

          <div className="content-flex">
            <div className="text-block">
              <p>
                I was selected to join the Nabil School of Social
                Entrepreneurship, where I participated in weekly sessions
                exploring socially driven, scalable ventures. The program
                strengthened my leadership approach and deepened my
                understanding of sustainable innovation.
              </p>

              <ul>
                <li>
                  Gained practical experience in identifying community needs
                  through structured field interviews and root-cause analysis
                  methods.
                </li>
                <li>
                  Learned to design clear and sustainable business models
                  supported by realistic budgeting and resource planning.
                </li>
                <li>
                  Developed an understanding of how to measure and evaluate
                  the social impact of community-focused projects.
                </li>
                <li>
                  Built skills in crafting and delivering pitches for social
                  enterprise and startup ideas.
                </li>
              </ul>
            </div>

            <div className="single-image-block">
              <img
                src="/images/nabil_fellowship.jpeg"
                alt="Nabil School of Social Entrepreneurship fellowship"
                loading="lazy"
              />
            </div>
          </div>

          {/* NABIL FELLOWSHIP PHOTO GALLERY */}
          <div className="photo-grid">
            <img
              src="/images/presentation.jpeg"
              alt="Presenting during the Nabil fellowship"
              loading="lazy"
            />
            <img
              src="/images/session1.jpeg"
              alt="Participating in a Nabil fellowship session"
              loading="lazy"
            />
            <img
              src="/images/session2.jpeg"
              alt="Collaborative learning during the fellowship"
              loading="lazy"
            />
            <img
              src="/images/nabil4.jpeg"
              alt="Nabil fellowship event"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          NATIONAL POLICY FORUM
          POSITIONED AFTER NABIL AND BEFORE AI ENGINEER
      ====================================================== */}
      <div className="section section-white npf-section">
        <div className="section-inner">
          <h2 className="title-sub">
            Research Intern, National Policy Forum Nepal
          </h2>

          <div className="content-flex npf-content">
            {/* NPF LOGO ON THE LEFT */}
            <div className="single-image-block npf-logo-block">
              <img
                src="/images/npf_logo.png"
                alt="National Policy Forum"
                loading="lazy"
              />
            </div>

            {/* RESEARCH DESCRIPTION ON THE RIGHT */}
            <div className="text-block npf-text-block">
              <p>
                As a Research Intern in Education Policy at the National
                Policy Forum, I contribute to research on education reform,
                public education systems, and learning outcomes in Nepal.
                My work involves reviewing existing research, supporting
                policy development, and examining ways to improve teaching
                and student learning.
              </p>

              <ul>
                <li>
                  Conduct literature reviews and policy analysis related to
                  education reform, public education systems, and learning
                  outcomes in Nepal.
                </li>

                <li>
                  Assist in preparing policy briefs, research reports,
                  presentations, and analytical summaries related to
                  education governance and reform.
                </li>

                <li>
                  Support the drafting of a policy recommendation paper for
                  the Ministry of Education focused on improving educational
                  delivery, classroom effectiveness, and student engagement
                  within and beyond formal classroom settings.
                </li>

                <li>
                  Assist in designing and implementing a survey of high
                  school teachers in a selected metropolitan city to assess
                  teaching practices and institutional challenges.
                </li>

                <li>
                  Contribute to the development of research tools and survey
                  instruments to evaluate student learning outcomes among
                  teachers who have received training and those who have not.
                </li>

                <li>
                  Support data collection, survey coordination, preliminary
                  data analysis, and preparation of findings for policy
                  discussions.
                </li>

                <li>
                  Participate in policy discussions, stakeholder
                  consultations, and research meetings organized by the
                  National Policy Forum.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          AI ENGINEER, HELLO WORLD IT SOLUTIONS
      ====================================================== */}
      <div className="section section-white">
        <div className="section-inner">
          <h2 className="title-sub">
            AI Engineer, Hello World IT Solutions
          </h2>

          <div className="content-flex">
            <div className="text-block">
              <p>
                As an AI Engineer, I worked on developing an AI-based
                diagnostic model to support the identification of pneumonia
                and tuberculosis from chest X-ray images.
              </p>

              <ul>
                <li>
                  Developed a diagnostic model using a dataset of 7,132
                  chest X-ray images.
                </li>
                <li>
                  Built a lightweight model architecture with 3.7 million
                  parameters.
                </li>
                <li>
                  Achieved 94% overall diagnostic accuracy in model
                  evaluation.
                </li>
                <li>
                  Received validation from medical experts regarding its
                  potential clinical applicability.
                </li>
              </ul>
            </div>

            <div className="single-image-block">
              <img
                src="/images/hello-world-it-solutions-logo.png"
                alt="Hello World IT Solutions"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          WORK EXPERIENCE
      ====================================================== */}
      <div className="section section-grey">
        <div className="section-inner">
          <h1 className="title-main">Work Experience</h1>

          <h2 className="title-sub">
            Project Coordinator: Urban TB Control Initiative,
            Japan-Nepal Health and Tuberculosis Research Association
          </h2>

          <div className="content-flex">
            <div className="single-image-block">
              <img
                src="/images/jantra-logo.png"
                alt="Japan-Nepal Health and Tuberculosis Research Association"
                loading="lazy"
              />
            </div>

            <div className="text-block">
              <p>
                During my role as Project Coordinator for the Urban TB
                Control Initiative at JANTRA, I worked on strengthening
                diagnostic access and community-level tuberculosis
                surveillance in high-density urban areas.
              </p>

              <ul>
                <li>
                  Collaborated with medical officers and field teams to
                  oversee AI-assisted X-ray screening and TB-LAMP testing.
                </li>
                <li>
                  Led screening operations reaching over 2,500 individuals
                  and supported effective linkage to treatment.
                </li>
                <li>
                  Trained 52 healthcare staff on diagnostic protocols and
                  reporting systems.
                </li>
                <li>
                  Organized and facilitated 12 structured review meetings
                  to refine strategies and track progress.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
