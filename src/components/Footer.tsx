"use client";

import { Instagram, Mail, Youtube } from "lucide-react";

export default function Footer({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void;
}) {
  const handleNav = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    ["home", "Home"],
    ["community", "Community Involvement"],
    ["art", "Art & Culture"],
    ["projects", "Projects"],
    ["leadership", "Leadership"],
    ["work", "Work Experience"],
    ["contact", "Contact"],
  ];

  return (
    <>
      <style>{`
        .footer-root {
          background-color: #6b0000;
          width: 100%;
          position: relative;
          z-index: 99999;
          isolation: isolate;
          overflow-x: hidden;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px 40px;
          text-align: center;
          color: #ffffff;
        }

        .footer-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2rem, 5vw, 2.8rem);
          font-weight: 400;
          margin-bottom: 40px;
          line-height: 1.2;
        }

        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 18px 32px;
          font-size: 14px;
          letter-spacing: 1px;
          margin-bottom: 48px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .footer-nav span {
          cursor: pointer;
          opacity: 0.95;
          transition: color 0.25s ease, opacity 0.25s ease;
          line-height: 1.6;
        }

        .footer-nav span:hover {
          color: #ffd6d6;
          opacity: 1;
        }

        .footer-socials {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 22px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .footer-icon {
          width: 50px;
          height: 50px;
          background: #ffffff;
          color: #6b0000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .footer-icon:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
        }

        .footer-icon a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          color: inherit;
          text-decoration: none;
        }

        .footer-top {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 42px;
          height: 42px;
          margin: 0 auto;
          border-radius: 50%;
          cursor: pointer;
          font-size: 22px;
          transition: all 0.25s ease;
          opacity: 0.85;
        }

        .footer-top:hover {
          opacity: 1;
          transform: translateY(-3px);
        }

        /* ==========================
           TABLET
        ========================== */
        @media (max-width: 768px) {
          .footer-container {
            padding: 70px 20px 35px;
          }

          .footer-nav {
            gap: 14px 24px;
            font-size: 13px;
            margin-bottom: 40px;
          }

          .footer-socials {
            gap: 18px;
          }

          .footer-icon {
            width: 46px;
            height: 46px;
          }
        }

        /* ==========================
           MOBILE
        ========================== */
        @media (max-width: 480px) {
          .footer-container {
            padding: 60px 16px 30px;
          }

          .footer-title {
            margin-bottom: 32px;
          }

          .footer-nav {
            flex-direction: column;
            gap: 12px;
            font-size: 13px;
            margin-bottom: 36px;
          }

          .footer-socials {
            gap: 14px;
            margin-bottom: 30px;
          }

          .footer-icon {
            width: 42px;
            height: 42px;
          }

          .footer-top {
            font-size: 20px;
          }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-container">
          <h2 className="footer-title">Aryan Basnet</h2>

          <nav className="footer-nav">
            {links.map(([key, label]) => (
              <span key={key} onClick={() => handleNav(key)}>
                {label}
              </span>
            ))}
          </nav>

          <div className="footer-socials">
            <div className="footer-icon">
              <a
                href="https://www.instagram.com/__aryanbasnet__/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.75} />
              </a>
            </div>

            <div className="footer-icon">
              <a
                href="mailto:basnetaryan05@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <Mail size={20} strokeWidth={1.75} />
              </a>
            </div>

            <div className="footer-icon">
              <a
                href="https://www.youtube.com/@techwitharyan05/featured"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube size={20} strokeWidth={1.75} />
              </a>
            </div>
          </div>

          <div
            className="footer-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑
          </div>
        </div>
      </footer>
    </>
  );
}
