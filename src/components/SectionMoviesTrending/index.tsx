import { DataResponseTredingMovies, Movie } from "@/types";
import CardMovieTrending from "../CardMovieTrending";
import Link from "next/link";

async function getTrendingMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_API}trending/movie/day?api_key=${process.env.NEXT_PUBLIC_KEY_API}&language=en-US`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch datas by trending movies");
  }

  return response.json() as unknown as DataResponseTredingMovies;
}

export default async function SectionMoviesTreding() {
  const datas = await getTrendingMovies();
  return (
    <section>
      <h2>Trending</h2>
      <ListMoviesTrending movies={datas.results} />
    </section>
  );
}

function ListMoviesTrending({ movies }: { movies: Movie[] }) {
  return (
    <div>
      {movies
        .filter((movie, index) => index < 5)
        .map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id} title="View Movie">
            <CardMovieTrending
              mediaType={movie.media_type}
              releaseDate={movie.release_date}
              title={movie.title}
              posterPath={movie.poster_path}
            />
          </Link>
        ))}
    </div>
  );
}
