import Image from "next/image";
import DatasCard from "../DatasCard";
import { shimer, toBase64 } from "@/utils";
import styles from "./CardMovieTrending.module.css";
import ViewCard from "../ViewCard";

interface PropsCardMovieTrending {
  mediaType: string;
  date: string;
  titleOrName: string;
  posterPath: string;
}

export default function CardMovieTrending({
  mediaType,
  date,
  titleOrName,
  posterPath,
}: PropsCardMovieTrending) {
  return (
    <div className={styles.card}>
      <div className={styles.wrapperImage}>
        {posterPath && (
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE + posterPath}`}
            alt={`poster ${mediaType} ${titleOrName}`}
            width={240}
            height={140}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimer(240, 140)
            )}`}
            className={styles.image}
            /*fill={true}*/
          />
        )}
        <ViewCard className={styles.hoverPoster} />
      </div>
      <DatasCard
        mediaType={mediaType}
        date={date}
        titleOrName={titleOrName}
        className={styles.datasCard}
      />
    </div>
  );
}
