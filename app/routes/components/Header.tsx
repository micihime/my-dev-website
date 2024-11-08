import "app/styles.css";
import Hamburger from "./Hamburger";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const navigationClass = `${styles.navigation} ${
    hamburgerOpen ? styles.navigationOpen : ""
  }`;

  return (
    <div className={styles.header}>
      <div className="content flexi">
        <div className={styles.logo}>
          <a href="/">Mitchie</a>
        </div>
        <div className={navigationClass}>
          <ul>
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
          <button
            className={styles.hamburger}
            onClick={toggleHamburger}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggleHamburger();
              }
            }}
            aria-label="Menu"
            aria-expanded={hamburgerOpen}
          >
            <Hamburger isOpen={hamburgerOpen} />
          </button>
        </div>
      </div>
    </div>
  );
}
