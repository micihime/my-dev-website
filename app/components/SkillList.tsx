import Skill from "~/components/Skill";
import styles from "./SkillList.module.css";
import { IconServer, IconCode, IconUsers } from "@tabler/icons-react";

export default function SkillList() {
  return (
    <div className={styles["values-list"]}>
      <ul className={styles.flexi}>
        <Skill
          title="Backend"
          details="Designing and implementing scalable REST APIs"
          icon={<IconServer size={24} />}
          skills={[
            { name: ".NET / C#", level: 90 },
            { name: "SQL", level: 85 },
            { name: "Azure", level: 75 },
          ]}
        />
        <Skill
          title="Frontend"
          details="Crafting responsive and interactive web interfaces"
          icon={<IconCode size={24} />}
          skills={[
            { name: "React", level: 85 },
            { name: "TypeScript", level: 80 },
            { name: "HTML/CSS", level: 70 },
          ]}
        />
        <Skill
          title="Soft skills"
          details="Collaborative team player with strong problem-solving"
          icon={<IconUsers size={24} />}
          skills={[
            { name: "Problem-solving", level: 95 },
            { name: "Adaptability", level: 90 },
            { name: "Teamwork", level: 85 },
          ]}
        />
      </ul>
    </div>
  );
}
