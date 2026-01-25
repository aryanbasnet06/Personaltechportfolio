export function CommunityPage() {
  return (
    <section className="community-page fade-in">
      <style>{`
        /* ================= PAGE-LOAD ANIMATION ================= */
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1.2s ease-out forwards;
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

        .community-page {
          padding: 140px 32px 180px;
          background: #ffffff;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .page-title {
          font-family: "Georgia", "Times New Roman", serif;
          font-size: 3.2rem;
          font-weight: 500;
          color: #7a0f0f;
          text-align: center;
          margin-bottom: 120px;
        }

        /* ================= INITIATIVE SECTION ================= */
        .initiative-section {
          background: #f7f7f7;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          padding: 96px 80px;
        }

        .initiative-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 96px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .heading-row {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 28px;
        }

        .logo {
          width: 44px;
          height: 44px;
        }

        .initiative-heading {
          font-family: "Georgia", serif;
          font-size: 1.6rem;
          color: #7a0f0f;
        }

        .initiative-text {
          font-size: 1rem;
          line-height: 1.9;
          color: #2f2f2f;
          margin-bottom: 26px;
        }

        .image-column img {
          width: 100%;
          margin-top: 28px;
        }

        /* ================= IMPACT SECTION ================= */
        .impact-section {
          padding: 140px 0 70px;
          text-align: center;
        }

        .impact-title {
          font-family: "Georgia", serif;
          font-size: 3rem;
          color: #7a0f0f;
          margin-bottom: 96px;
        }

        .impact-grid {
          display: grid;
          gap: 48px;
          margin: 0 auto 96px;
        }

        .impact-grid.top {
          grid-template-columns: repeat(2, 1fr);
          max-width: 700px;
          margin-bottom: 64px;
        }

        .impact-grid.bottom {
          grid-template-columns: repeat(3, 1fr);
          max-width: 960px;
        }

        .impact-card {
          padding: 36px 24px;
          color: white;
          font-family: "Georgia", serif;
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.45s ease,
            filter 0.45s ease;
          cursor: default;
        }

        .impact-card:hover {
          transform: translateY(-10px) scale(1.035);
          box-shadow: 0 28px 50px rgba(0, 0, 0, 0.25);
          filter: brightness(1.08);
        }

        .pink { background: #c29b9b; }
        .maroon { background: #7a3333; }
        .dark-maroon { background: #6d0000; }
        .grey { background: #6b645c; }

        .impact-number {
          font-size: 3rem;
        }

        .impact-label {
          font-size: 1.1rem;
        }

        /* ================= RECOGNITION SECTION ================= */
        .recognition-section {
          background: #f7f7f7;
          padding: 140px 80px;
          margin-top: 40px;
        }

        .recognition-intro {
          max-width: 1000px;
          margin: 0 auto 120px;
          text-align: center;
          font-family: "Georgia", serif;
          font-size: 1.15rem;
          line-height: 1.9;
        }

        .recognition-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }

        .recognition-frame {
          width: 420px;
          height: 300px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .recognition-frame img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .recognition-link {
          margin-top: 18px;
          font-family: "Georgia", serif;
          font-size: 1rem;
          color: #7a0f0f;
          text-decoration: underline;
          cursor: pointer;
        }

        .recognition-link:hover {
          opacity: 0.75;
        }

        /* ================= SUCCESS STORIES ================= */
        .stories-section {
          padding: 160px 0 0;
        }

        .stories-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 120px;
        }

        .stories-title {
          font-family: "Georgia", serif;
          font-size: 2.4rem;
          color: #7a0f0f;
          text-align: center;
          margin-bottom: 24px;
        }

        .stories-subtitle {
          text-align: center;
          font-family: "Georgia", serif;
          font-style: italic;
          margin-bottom: 48px;
        }

        .image-grid-2x2,
        .image-grid-cohort {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .image-grid-2x2 img,
        .image-grid-cohort img {
          width: 100%;
          display: block;
          transition: transform 0.45s ease, box-shadow 0.45s ease;
          cursor: pointer;
        }

        .image-grid-2x2 img:hover,
        .image-grid-cohort img:hover {
          transform: scale(1.04) translateY(-6px);
          box-shadow: 0 22px 40px rgba(0, 0, 0, 0.18);
        }

        @media (max-width: 900px) {
          .initiative-grid,
          .recognition-grid,
          .stories-grid {
            grid-template-columns: 1fr;
          }

          .recognition-frame {
            width: 100%;
            height: auto;
          }
        }
      `}</style>

      {/* ================= CONTENT ================= */}

      <div className="container">
        <h1 className="page-title">Social Impact Initiatives</h1>
      </div>

      <div className="initiative-section">
        <div className="initiative-grid">
          <div>
            <div className="heading-row">
              <img src="/images/vidhata-logo.png" className="logo" />
              <h2 className="initiative-heading">
                Vidhata, my Non-Profit Organisation
              </h2>
            </div>

            <p className="initiative-text">
              I started Vidhata in January 2022 to address gaps in holistic,
              non-academic learning for underserved students in Nepal. Growing
              up, I saw how limited access to skill-based education constrained
              students’ confidence, exposure, and future opportunities,
              especially in public school systems. I wanted to create an
              initiative that complemented formal education by fostering life
              skills and personal development.
            </p>

            <p className="initiative-text">
              Today, Vidhata operates through a structured, volunteer-driven
              model focused on skill-building and mentorship. By connecting
              trained volunteers with schools and communities, we deliver
              accessible and well-designed learning interventions beyond
              traditional curricula. Since its inception, Vidhata has impacted
              thousands of students across Nepal through scalable,
              community-centered programs.
            </p>
          </div>

          <div className="image-column">
            <img src="/images/vidhata.jpeg" />
          </div>
        </div>
      </div>

      {/* IMPACT */}
      <div className="impact-section">
        <h2 className="impact-title">Vidhata’s Impact in Numbers</h2>

        <div className="impact-grid top">
          <div className="impact-card pink">
            <div className="impact-number">120+</div>
            <div className="impact-label">Volunteers Conducted</div>
          </div>

          <div className="impact-card maroon">
            <div className="impact-number">5600+</div>
            <div className="impact-label">Students Impacted</div>
          </div>
        </div>

        <div className="impact-grid bottom">
          <div className="impact-card grey">
            <div className="impact-number">18</div>
            <div className="impact-label">Partner Organizations</div>
          </div>

          <div className="impact-card dark-maroon">
            <div className="impact-number">450+</div>
            <div className="impact-label">Lecture Hours</div>
          </div>

          <div className="impact-card grey">
            <div className="impact-number">18</div>
            <div className="impact-label">Districts Reached</div>
          </div>
        </div>
      </div>

      {/* RECOGNITION */}
      <div className="recognition-section">
        <div className="container">
          <p className="recognition-intro">
            My work also earned me an <strong>official nomination</strong> as
            one of the <strong>Glocal Teen Hero Nepal 2024</strong> an honor
            awarded to 20 exceptional teenagers across Nepal for outstanding
            leadership, social impact, and community-driven innovation.
          </p>

          <div className="recognition-grid">
            <div className="recognition-frame">
              <img src="/images/glocal-award.png" />
            </div>

            <div className="recognition-frame">
              <img src="/images/Glocal_logo.png" />
              <a
                href="https://glocalteenhero.com/aryan-basnet/"
                target="_blank"
                rel="noopener noreferrer"
                className="recognition-link"
              >
                Read my feature
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* STORIES */}
      <div className="container stories-section">
        <div className="stories-grid">
          <div>
            <h2 className="stories-title">Our Success Stories</h2>
            <p className="stories-subtitle">
              Outcomes shaped by consistent effort, applied learning, and
              progress
            </p>
            <div className="image-grid-2x2">
              <img src="/images/story1.jpg" />
              <img src="/images/story2.jpg" />
              <img src="/images/story3.jpg" />
              <img src="/images/story4.jpg" />
            </div>
          </div>

          <div>
            <h2 className="stories-title">Our Training Cohorts</h2>
            <p className="stories-subtitle">
              In Collaboration With Rural Self Employment Training Institutes
            </p>
            <div className="image-grid-cohort">
              <img src="/images/training1.webp" />
              <img src="/images/training2.webp" />
              <img src="/images/training3.jpg" />
              <img src="/images/training4.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
