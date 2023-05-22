import Image from "next/image";
import DatasCard from "../DatasCard";
import { shimer, toBase64 } from "@/utils";

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
    <div>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE + posterPath}`}
        alt={`poster ${mediaType} ${title}`}
        width={500}
        height={500}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimer(500, 500))}`}
      />
      <DatasCard
        mediaType={mediaType}
        releaseDate={releaseDate}
        title={title}
      />
    </div>
  );
}
