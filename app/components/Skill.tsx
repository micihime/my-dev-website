interface SkillProps {
  title: string;
  details: string;
  icon?: string;
}

export default function Skill({ title, details, icon }: SkillProps) {
  return (
    <li>
      {icon && (
        <div className="skill-icon">
          <i className={`fa ${icon}`}></i>
        </div>
      )}
      <h3>{title}:</h3>
      <p>{details}</p>
    </li>
  );
}
