interface SkillProps {
  title: string;
  details: string;
  icon?: React.ReactNode;
}

export default function Skill({ title, details, icon }: SkillProps) {
  return (
    <li>
      {icon && <div className="skill-icon">{icon}</div>}
      <h3>{title}:</h3>
      <p>{details}</p>
    </li>
  );
}
