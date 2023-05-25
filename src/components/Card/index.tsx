import Link from "next/link";
import CardTrending from "../CardTrending";
import ViewCard from "../ViewCard";
import CardCommon from "../CardCommon";
import styles from "./Card.module.css";

interface PropsCard {
  typeCard: "trending" | "common";
  id: number;
  mediaType: string;
  date: string;
  titleOrName: string;
  posterPath: string;
}

export default function Card({
  typeCard,
  id,
  mediaType,
  date,
  titleOrName,
  posterPath,
}: PropsCard) {
  return (
    <Link
      href={`/${mediaType}/${id}`}
      title={`View ${mediaType}`}
      rel="next"
      className={styles.cardLink}
    >
      {typeCard === "trending" ? (
        <>
          <CardTrending
            mediaType={mediaType}
            date={date}
            titleOrName={titleOrName}
            posterPath={posterPath}
          />
          <ViewCard className={styles.hoverPoster} />
        </>
      ) : (
        <>
          <CardCommon
            mediaType={mediaType}
            date={date}
            titleOrName={titleOrName}
            posterPath={posterPath}
          />
          <ViewCard className={styles.hoverPoster} />
        </>
      )}
    </Link>
  );
}
