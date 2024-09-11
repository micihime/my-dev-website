import 'app/styles.css'

export default function Header() {
    return (
	<div className="header">
		<div className="content flexi">
			<div className="logo">Mitchie</div>
      <ul className="navbar flexi">
        <li>
          <a href="/">Home</a>
        </li>
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
    )
}