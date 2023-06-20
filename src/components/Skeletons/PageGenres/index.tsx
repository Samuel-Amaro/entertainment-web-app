import styles from "./styles.module.css";

export default function SkeletonPageGenres() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
      <ul className={styles.list}>
        <li className={styles.card}></li>
        <li className={styles.card}></li>
        <li className={styles.card}></li>
        <li className={styles.card}></li>
        <li className={styles.card}></li>
      </ul>
    </div>
  );
}
