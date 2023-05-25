import IconCategoryMovie from "../Icons/IconCategoryMovie";
import IconCategoryTv from "../Icons/IconCategoryTv";
import styles from "./DatasCard.module.css";

interface PropsDatasCard {
  mediaType: string;
  date: string;
  titleOrName: string;
  className?: string;
}

export default function DatasCard({
  mediaType,
  date,
  titleOrName,
  className,
}: PropsDatasCard) {
  return (
    <div className={className ? className : undefined}>
      <p className={styles.container}>
        <span className={styles.year}>{new Date(date).getFullYear()}</span>
        <span className={styles.diviser}></span>
        <span className={styles.wrapper}>
          {mediaType === "movie" ? (
            <IconCategoryMovie className={styles.icon} />
          ) : (
            <IconCategoryTv className={styles.icon} />
          )}
          <span className={styles.mediaType}>{mediaType}</span>
        </span>
      </p>
      <h3 className="headingS">{titleOrName}</h3>
    </div>
  );
}
