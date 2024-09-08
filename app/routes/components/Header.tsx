import 'app/styles.css'

export default function Header() {
    return (
	<div className="zahlavi">
		<div className="obsah pruzny">
			<div className="logo">Můj web</div>
      <ul className="navigace pruzny">
        <li>
          <a href="/about">About Me</a>
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
    )
}