import "app/styles.css";

export default function Header() {
  return (
    <div className="header">
      <div className="content flexi">
        <a href="/">
          <div className="logo">Mitchie</div>
        </a>
        <ul className="navbar flexi">
          <li>
            <a href="/values">My Values</a>
          </li>
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
