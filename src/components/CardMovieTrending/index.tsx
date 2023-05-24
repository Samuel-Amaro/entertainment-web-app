import Image, { ImageLoader, ImageLoaderProps } from "next/image";
import DatasCard from "../DatasCard";
import { shimer, toBase64 } from "@/utils";
import styles from "./CardMovieTrending.module.css";

interface PropsCardMovieTrending {
  mediaType: string;
  releaseDate: string;
  title: string;
  posterPath: string;
}

export default function CardMovieTrending({
  mediaType,
  releaseDate,
  title,
  posterPath,
}: PropsCardMovieTrending) {
  return (
    <div className={styles.card}>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE + posterPath}`}
        alt={`poster ${mediaType} ${title}`}
        /*width={240}
        height={140}*/
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimer(240, 140))}`}
        className={styles.image}
        fill={true}
      />
      <DatasCard
        mediaType={mediaType}
        releaseDate={releaseDate}
        title={title}
        className={styles.datasCard}
      />
    </div>
  );
}
