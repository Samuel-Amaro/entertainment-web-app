import styles from "./SectionTrending.module.css";

export default function SkeletonSectionTrending({
  limitRenderingItems,
}: {
  limitRenderingItems: number;
}) {
  const cardTrending = (
    <div className={`${styles.cardTrendingMovie} ${styles.skeleton}`}></div>
  );
  const cards = new Array(limitRenderingItems).fill(cardTrending);

  return (
    <div className={styles.section}>
      <span className={styles.title}></span>
      <div className={styles.list}>{cards}</div>
    </div>
  );
}
