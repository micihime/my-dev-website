import styles from "./Footer.module.css";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export default function Index() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <span>Mitchie</span>
      </div>
      <div className={styles.socialIcons}>
        <a
          href="mailto:mitchie.code@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconMail size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/miroslava-hre%C5%A1kov%C3%A1-bbb5939a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub size={18} />
        </a>
        <a
          href="https://github.com/micihime"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin size={18} />
        </a>
      </div>
    </div>
  );
}
