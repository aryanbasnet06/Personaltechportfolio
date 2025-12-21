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
          font-size: 42px;
          font-weight: 400;
          margin-bottom: 40px;
        }

        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 36px;
          font-size: 14px;
          letter-spacing: 1px;
          margin-bottom: 48px;
        }

        .footer-nav span {
          cursor: pointer;
          opacity: 0.95;
          transition: color 0.25s ease, opacity 0.25s ease;
        }

        .footer-nav span:hover {
          color: #ffd6d6;
          opacity: 1;
        }

        .footer-socials {
          display: flex;
          justify-content: center;
          gap: 22px;
          margin-bottom: 40px;
        }

        .footer-icon {
          width: 48px;
          height: 48px;
          background: #ffffff;
          color: #6b0000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .footer-icon:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }

        .footer-icon a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          color: inherit;
        }

        .footer-top {
          display: flex;
          justify-content: center;
          font-size: 20px;
          cursor: pointer;
          opacity: 0.85;
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
            {/* Instagram */}
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

            {/* Gmail */}
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

            {/* YouTube */}
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
