import styles from "./CardCommon.module.css";
import DatasCard from "../DatasCard";
import ViewCard from "../ViewCard";

interface PropsCardCommon {
  mediaType: string;
  date: string;
  titleOrName: string;
  posterPath: string;
}

export default function CardCommon({
  mediaType,
  date,
  titleOrName,
  posterPath,
}: PropsCardCommon) {
  return (
    <div className={styles.card}>
      <div className={posterPath ? styles.wrapperImage : styles.wrapperImageEmpty}>
        {posterPath && (
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE + posterPath}`}
            alt={`poster ${mediaType} ${titleOrName}`}
            title={`poster ${mediaType} ${titleOrName}`}
            width={240}
            height={140}
            decoding="async"
            className={styles.image}
          />
        )}
        <ViewCard className={styles.hoverPoster} />
      </div>
      <DatasCard mediaType={mediaType} date={date} titleOrName={titleOrName} />
    </div>
  );
}
