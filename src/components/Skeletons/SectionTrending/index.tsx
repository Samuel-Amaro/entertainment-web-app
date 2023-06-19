import styles from "./SectionTrending.module.css";

export default function SkeletonSectionTrending({
  limitRenderingItems,
}: {
  limitRenderingItems: number;
}) {
  const cardTrending = (
    <div className={`${styles.card}`}>
      <div className={styles.cardImage}></div>
      <div className={styles.cardDatas}>
        <p className={styles.cardInfo}></p>
        <p className={styles.cardTitle}></p>
      </div>
    </div>
  );
  const cards = new Array(limitRenderingItems).fill(cardTrending);

  return (
    <div className={styles.section}>
      <span className={styles.title}></span>
      <span className={styles.description}></span>
      <div className={styles.list}>{cards}</div>
    </div>
  );
}

