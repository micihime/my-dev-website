import Skill from "~/components/Skill";
import styles from "./SkillList.module.css";

export default function SkillList() {
  return (
    <div className={styles["values-list"]}>
      <ul className={styles.flexi}>
        <Skill
          title="Backend"
          details=".NET, C#, SQL, TypeScript / JavaScript"
        />
        <Skill
          title="Frontend"
          details="React, Remix, TypeScript / JavaScript, HTML, CSS"
        />
        <Skill
          title="Soft skills"
          details="Problem-solving, adaptability, communication, teamwork"
        />
      </ul>
    </div>
  );
}
