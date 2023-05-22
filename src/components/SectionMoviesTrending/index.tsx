import { Movie } from "@/types";
import CardMovieTrending from "../CardMovieTrending";

export default function SectionMoviesTreding({
  trendingMovies,
}: {
  trendingMovies: Movie[];
}) {
  return (
    <section>
      <h2>Trending</h2>
      {trendingMovies
        .filter((movie, index) => index < 5)
        .map((movie) => (
          <CardMovieTrending
            key={movie.id}
            mediaType={movie.media_type}
            releaseDate={movie.release_date}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        ))}
    </section>
  );
}
