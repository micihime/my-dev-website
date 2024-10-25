import Hamburger from "./Hamburger";
import { useState } from "react";
import styles from "./Navigation.module.css";

export default function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const navigationClass = `${styles.navigation} ${
    hamburgerOpen ? styles.navigationOpen : ""
  }`;

  return (
    <div>
      <div className={navigationClass}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
        <button
          className="hamburger"
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
  );
}
