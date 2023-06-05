import SkeletonSectionCommon from "../SectionCommon";
import styles from "./styles.module.css";

export default function SkeletonPagination({
  limitRenderingItems,
}: {
  limitRenderingItems: number;
}) {
  return (
    <div className={styles.main}>
      <SkeletonSectionCommon limitRenderingItems={limitRenderingItems} />
      <div className={styles.containerButtons}>
        <span className={styles.button}></span>
        <span className={styles.indicator}></span>
        <span className={styles.button}></span>
      </div>
    </div>
  );
}
