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
          skills={[
            { name: ".NET / C#", level: 90 },
            { name: "SQL", level: 85 },
            { name: "TypeScript", level: 80 },
            { name: "JavaScript", level: 75 },
          ]}
        />
        <Skill
          title="Frontend"
          details="React, Remix, TypeScript / JavaScript, HTML, CSS"
          icon={<IconCode size={24} />}
          skills={[
            { name: "React", level: 85 },
            { name: "Remix", level: 75 },
            { name: "TypeScript", level: 80 },
            { name: "HTML/CSS", level: 90 },
          ]}
        />
        <Skill
          title="Soft skills"
          details="Problem-solving, adaptability, communication, teamwork"
          icon={<IconUsers size={24} />}
          skills={[
            { name: "Problem-solving", level: 95 },
            { name: "Adaptability", level: 90 },
            { name: "Communication", level: 85 },
            { name: "Teamwork", level: 90 },
          ]}
        />
      </ul>
    </div>
  );
}
