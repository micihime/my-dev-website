import "app/styles.css";
import Nav from "./Navigation";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={`${styles.content} flexi`}>
        <div className={styles.logo}>
          <a href="/">Mitchie</a>
        </div>
        <Nav />
      </div>
    </div>
  );
}
