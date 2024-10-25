import "app/styles.css";
import Nav from "./Navigation";

export default function Header() {
  return (
    <div className="header">
      <div className="content flexi">
        <a href="/">
          <div className="logo">Mitchie</div>
        </a>
        <Nav />
        {/* <ul className="navbar flexi">
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
