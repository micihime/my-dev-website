import styles from "./Skill.module.css";

interface SkillProps {
  title: string;
  details: string;
  icon?: React.ReactNode;
  skills?: { name: string; level: number }[];
}

export default function Skill({ title, details, icon, skills }: SkillProps) {
  return (
    <li className={styles["skill-item"]}>
      {icon && <div className={styles["skill-icon"]}>{icon}</div>}
      <h3 className={styles["skill-title"]}>{title}:</h3>
      <p className={styles["skill-details"]}>{details}</p>
      {skills && (
        <div className={styles["skill-bars"]}>
          {skills.map((skill, index) => (
            <div key={index} className={styles["skill-bar"]}>
              <span className={styles["skill-name"]}>{skill.name}</span>
              <div className={styles["skill-progress"]}>
                <div
                  className={styles["skill-progress-fill"]}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </li>
  );
}
