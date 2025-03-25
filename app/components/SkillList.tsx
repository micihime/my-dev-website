import Skill from "~/components/Skill";
import styles from "./SkillList.module.css";
import { IconServer, IconCode, IconUsers } from "@tabler/icons-react";

export default function SkillList() {
  return (
    <div className={styles["values-list"]}>
      <ul className={styles.flexi}>
        <Skill
          title="Backend"
          details=".NET, C#, SQL, TypeScript / JavaScript"
          icon={<IconServer size={24} />}
        />
        <Skill
          title="Frontend"
          details="React, Remix, TypeScript / JavaScript, HTML, CSS"
          icon={<IconCode size={24} />}
        />
        <Skill
          title="Soft skills"
          details="Problem-solving, adaptability, communication, teamwork"
          icon={<IconUsers size={24} />}
        />
      </ul>
    </div>
  );
}
