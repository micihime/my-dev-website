import { useState } from "react";
import "app/styles.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="content flexi">
        <a href="/">
          <div className="logo">Mitchie</div>
        </a>
        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <ul className={`navbar flexi ${isMenuOpen ? "menu-open" : ""}`}>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
