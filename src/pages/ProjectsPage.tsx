export function ProjectsPage() {
  return (
    <section className="titan3023 page-transition">
      <style>{`
        /* PAGE TRANSITION */
        .page-transition {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 1.1s ease-out forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* GLOBAL THEME */
        .titan3023 {
          font-family: Georgia, "Times New Roman", serif;
          color: #2b2b2b;
        }

        .section-white {
          background: #ffffff;
          padding: 160px 24px;
        }

        .section-grey {
          background: #f4f4f4;
          padding: 160px 24px;
        }

        .titan-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* HERO / SPLIT LAYOUT */
        .hero,
        .book-project,
        .youtube-project {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: center;
        }

        .hero-tag,
        .book-tag,
        .youtube-tag {
          display: inline-block;
          padding: 6px 16px;
          border: 1px solid #7a0c0c;
          color: #7a0c0c;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .hero h1,
        .book-project h1,
        .youtube-project h1 {
          font-size: 3.2rem;
          color: #7a0c0c;
          margin-bottom: 28px;
        }

        .hero p,
        .book-project p,
        .youtube-project p {
          font-size: 1.1rem;
          line-height: 1.9;
          color: #444;
          max-width: 560px;
        }

        /* IMAGE BASE */
        .hero-image img,
        .youtube-image img,
        .book-cover img {
          width: 100%;
          display: block;
          border-radius: 14px;
          box-shadow: 0 26px 52px rgba(0,0,0,0.16);
          transition:
            transform 0.6s cubic-bezier(.22,.61,.36,1),
            box-shadow 0.6s cubic-bezier(.22,.61,.36,1);
        }

        /* IMAGE HOVER EFFECT */
        .hero-image img:hover,
        .youtube-image img:hover,
        .book-cover img:hover {
          transform: translateY(-10px) scale(1.045);
          box-shadow: 0 46px 92px rgba(0,0,0,0.28);
        }

        /* BUTTONS */
        .hero-cta {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 42px;
        }

        .btn-primary,
        .btn-outline {
          padding: 14px 32px;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.35s cubic-bezier(.22,.61,.36,1);
        }

        .btn-primary {
          background: #7a0c0c;
          color: #ffffff;
          border: 1px solid #7a0c0c;
        }

        .btn-primary:hover {
          background: transparent;
          color: #7a0c0c;
          transform: translateY(-3px);
          box-shadow: 0 14px 28px rgba(122,12,12,0.25);
        }

        .btn-outline {
          border: 1px solid #7a0c0c;
          color: #7a0c0c;
          background: transparent;
        }

        .btn-outline:hover {
          background: #7a0c0c;
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 14px 28px rgba(122,12,12,0.25);
        }

        /* FEATURES */
        .features-title {
          text-align: center;
          margin-bottom: 72px;
        }

        .features-title h1 {
          font-size: 2.8rem;
          color: #7a0c0c;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
        }

        .feature {
          background: #ffffff;
          border: 1px solid #e0e0e0;
          padding: 40px 36px;
          transition: all 0.45s cubic-bezier(.22,.61,.36,1);
        }

        .feature h4 {
          color: #7a0c0c;
          margin-bottom: 12px;
        }

        .feature:hover {
          transform: translateY(-10px);
          border-color: #7a0c0c;
          box-shadow: 0 22px 40px rgba(122,12,12,0.18);
        }

        /* DEMO */
        .demo {
          text-align: center;
        }

        .demo h2 {
          font-size: 2.4rem;
          color: #7a0c0c;
          margin-bottom: 42px;
        }

        .demo-frame {
          max-width: 900px;
          margin: 0 auto;
          background: #fff;
        }

        .demo-frame iframe {
          width: 100%;
          height: 500px;
          border: none;
        }

        /* BOOK */
        .book-cover {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .hero,
          .book-project,
          .youtube-project {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero p,
          .book-project p,
          .youtube-project p {
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .features {
            grid-template-columns: 1fr;
          }

          .hero h1,
          .book-project h1,
          .youtube-project h1 {
            font-size: 2.4rem;
          }
        }
      `}</style>

      {/* GAME PROJECT */}
      <div className="section-white">
        <div className="titan-container hero">
          <div>
            <span className="hero-tag">Educational Game Project</span>
            <h1>Titan 3023</h1>
            <p>
              Titan 3023 is a narrative-driven educational space game that
              teaches children facts about the solar system through interactive
              missions. It blends astronomy with engaging gameplay, allowing
              players to explore planets, learn key concepts, and apply their
              knowledge through fun challenges.
            </p>

            <div className="hero-cta">
              <a
                href="https://play.unity.com/en/games/754fe501-9767-4a01-a6da-91f46dceb2e5/titan-3023"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Play the Game
              </a>
              <a
                href="https://www.youtube.com/watch?v=Ng4upY_2MVQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Watch Demonstration
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src="/images/game-logo.png" alt="Titan 3023 game visual" />
          </div>
        </div>
      </div>

      {/* GAME FEATURES */}
      <div className="section-grey">
        <div className="titan-container">
          <div className="features-title">
            <h1>Features of the Game</h1>
          </div>

          <div className="features">
            <div className="feature">
              <h4>Embedded Scientific Concepts</h4>
              <p>Learning emerges naturally from gameplay mechanics.</p>
            </div>
            <div className="feature">
              <h4>Mission-Oriented Progression</h4>
              <p>Each level mirrors real-world space exploration challenges.</p>
            </div>
            <div className="feature">
              <h4>Accessible & Thoughtful Design</h4>
              <p>Simple visuals and intuitive controls ensure ease of use.</p>
            </div>
          </div>
        </div>
      </div>

      {/* GAME DEMO */}
      <div className="section-white">
        <div className="titan-container demo">
          <h2>Game Demonstration</h2>
          <div className="demo-frame">
            <iframe
              src="https://www.youtube.com/embed/Ng4upY_2MVQ
"
              title="Titan 3023 Gameplay Demonstration"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* BOOK PROJECT */}
      <div className="section-grey">
        <div className="titan-container book-project">
          <div className="book-cover">
            <img
              src="images/book_cover.png"
              alt="Machine Learning Book Cover"
            />
            <a
              href="https://www.amazon.com/dp/B0DRPQRGC9/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Read the Book
            </a>
          </div>

          <div>
            <span className="book-tag">Book Project</span>
            <h1>Machine Learning for High Schoolers</h1>
            <p>
              This book provides a practical introduction to machine learning,
              specifically designed for high school students. It combines
              foundational concepts in mathematics, computer science, and
              data-analysis with step-by-step guidance to create and evaluate
              machine learning models. With accessible explanations and
              real-world examples, the book bridges the gap between
              beginner-friendly resources and overly technical material.
            </p>
          </div>
        </div>
      </div>

      {/* BOOK FEATURES */}
      <div className="section-white">
        <div className="titan-container">
          <div className="features-title">
            <h1>Features of the Book</h1>
          </div>

          <div className="features">
            <div className="feature">
              <h4>Concept-First Explanations</h4>
              <p>Ideas are introduced intuitively before technical depth.</p>
            </div>
            <div className="feature">
              <h4>Real-World Examples</h4>
              <p>Machine learning connected to everyday experiences.</p>
            </div>
            <div className="feature">
              <h4>Student-Centered Structure</h4>
              <p>Designed for clarity, flow, and young learners.</p>
            </div>
          </div>
        </div>
      </div>

      {/* YOUTUBE CHANNEL */}
      <div className="section-grey">
        <div className="titan-container youtube-project">
          <div>
            <span className="youtube-tag">YouTube Channel</span>
            <h1>Tech With Aryan</h1>
            <p>
              I realized that many people in Nepal wanted to learn coding, but
              most online resources were only available in English. To bridge
              this gap, I started a YouTube channel where I teach coding in
              Nepali, making tech education accessible and empowering the Nepali
              tech community.
            </p>

            <div className="hero-cta">
              <a
                href="https://www.youtube.com/@techwitharyan05/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit Channel
              </a>
            </div>
          </div>

          <div>
            <img
              src="/images/youtube_channel.png"
              alt="Tech With Aryan Channel"
            />
          </div>
        </div>
      </div>

      {/* YOUTUBE FEATURES */}
      <div className="section-white">
        <div className="titan-container">
          <div className="features-title">
            <h1>Features of the Channel</h1>
          </div>

          <div className="features">
            <div className="feature">
              <h4>Nepali Language Tutorials</h4>
              <p>Coding concepts explained clearly in Nepali.</p>
            </div>
            <div className="feature">
              <h4>Beginner-Friendly Content</h4>
              <p>Designed for students with little or no prior experience.</p>
            </div>
            <div className="feature">
              <h4>Community-Focused Learning</h4>
              <p>Encouraging and supporting Nepal’s growing tech community.</p>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO DEMO */}
      <div className="section-grey">
        <div className="titan-container demo">
          <h2>Video Demonstration</h2>
          <div className="demo-frame">
            <iframe
              src="https://www.youtube.com/embed/C-jafqSxrks"
              title="YouTube Video Demonstration"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
