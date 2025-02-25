interface SkillProps {
  title: string;
  details: string;
}

export default function Skill({ title, details }: SkillProps) {
  return (
    <li>
      <h3>{title}:</h3>
      <p>{details}</p>
    </li>
  );
}
