import { Mail } from "lucide-react";

export function ContactPage() {
  return (
    <section className="contact-root fade-in">
      <style>{`
        * {
          box-sizing: border-box;
        }

        /* ===== PAGE LOAD TRANSITION ===== */
        .fade-in {
          opacity: 0;
          transform: translateY(32px);
          animation: fadeInUp 1.1s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-root {
          padding: 140px 24px 120px;
          font-family: "Georgia", "Times New Roman", serif;
          background: #ffffff;
        }

        .contact-title {
          text-align: center;
          font-size: 56px;
          color: #6b0f0f;
          margin-bottom: 80px;
          font-weight: 500;
        }

        .contact-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 64px;
        }

        .contact-card {
          background: #fafafa;
          padding: 48px;
        }

        .contact-card h3 {
          font-size: 26px;
          color: #6b0f0f;
          margin-bottom: 28px;
          font-weight: 500;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .contact-input,
        .contact-textarea {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #c5c5c5;
          font-size: 16px;
          outline: none;
          font-family: inherit;
        }

        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: #6f6f6f;
        }

        .contact-textarea {
          min-height: 140px;
          resize: none;
          margin-top: 16px;
        }

        .contact-label {
          margin: 22px 0 12px;
          font-size: 16px;
          color: #000;
        }

        .submit-btn {
          margin-top: 28px;
          background: #000;
          color: #fff;
          padding: 12px 28px;
          border: none;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.15s ease;
        }

        .submit-btn:hover {
          background: #222;
          transform: translateY(-1px);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        .mail-box {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 18px;
        }

        .mail-box a {
          color: #000;
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .contact-container {
            grid-template-columns: 1fr;
          }

          .contact-title {
            font-size: 42px;
          }
        }
      `}</style>

      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-container">
        {/* LEFT: REQUEST A CALL */}
        <div className="contact-card">
          <h3>Request a Call</h3>

          <div className="form-row">
            <input className="contact-input" placeholder="First Name" />
            <input className="contact-input" placeholder="Last Name" />
          </div>

          <input
            className="contact-input"
            placeholder="Email Address"
            style={{ marginBottom: "20px" }}
          />

          <input className="contact-input" placeholder="Contact Number" />

          <p className="contact-label">
            I'm looking forward to connect with you! Is there anything specific
            you want to discuss with me?
          </p>

          <textarea className="contact-textarea" />

          <button className="submit-btn">Submit</button>
        </div>

        {/* RIGHT: EMAIL */}
        <div className="contact-card">
          <h3>Give me Mail.</h3>

          <div className="mail-box">
            <Mail size={22} color="#6b0f0f" />
            <a href="mailto:basnetaryan05@gmail.com">basnetaryan05@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
