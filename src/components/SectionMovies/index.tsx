import { Movie } from "@/types";
import Card from "../Card";

export function renderCardMovie(
  movie: Movie,
  typeCard: "trending" | "common",
  mediaType?: "movie" | "tv" | undefined
) {
  return (
    <Card
      typeCard={typeCard}
      id={movie.id}
      mediaType={mediaType ? mediaType : movie.media_type}
      date={movie.release_date}
      titleOrName={movie.title}
      posterPath={movie.poster_path}
    />
  );
}
