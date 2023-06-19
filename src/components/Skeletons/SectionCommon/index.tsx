import styles from "./SectionCommon.module.css";

export default function SkeletonSectionCommon({
  limitRenderingItems,
}: {
  limitRenderingItems: number;
}) {
  const cards = new Array(limitRenderingItems).fill(<Card />);

  return (
    <div className={styles.section}>
      <span className={styles.title}></span>
      <span className={styles.description}></span>
      <div className={styles.list}>
        {cards.map((card, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}></div>
      <div className={styles.cardDatas}>
        <p className={styles.cardInfo}></p>
        <p className={styles.cardTitle}></p>
      </div>
    </div>
  );
}
