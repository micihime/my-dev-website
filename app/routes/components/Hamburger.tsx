import styles from "./Hamburger.module.css";

export default function Hamburger({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}>
      <div className={`${styles.burger} ${styles.burger1}`} />
      <div className={`${styles.burger} ${styles.burger2}`} />
      <div className={`${styles.burger} ${styles.burger3}`} />
    </div>
  );
}
