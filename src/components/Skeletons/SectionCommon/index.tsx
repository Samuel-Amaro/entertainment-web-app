import styles from "./SectionCommon.module.css";

export default function SkeletonSectionCommon({
  limitRenderingItems,
}: {
  limitRenderingItems: number;
}) {
  const card = (
    <div className={styles.card}>
      <div className={styles.cardImage}></div>
      <div className={styles.cardDatas}>
        <p className={styles.cardInfo}></p>
        <p className={styles.cardTitle}></p>
      </div>
    </div>
  );
  const cards = new Array(limitRenderingItems).fill(card);

  return (
    <div className={styles.section}>
      <span className={styles.title}></span>
      <div className={styles.list}>{cards}</div>
    </div>
  );
}
