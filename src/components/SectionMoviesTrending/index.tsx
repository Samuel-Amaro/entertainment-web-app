import { DataResponseTredingMovies, Movie } from "@/types";
import CardMovieTrending from "../CardMovieTrending";
import Link from "next/link";
import styles from "./SectionMoviesTrending.module.css";
import IconEye from "../Icons/IconEye";
import { getTrendingMovies } from "@/api/tmdb";
import Section from "../Section";

export default async function SectionMoviesTreding() {
  const datas = await getTrendingMovies();
  return (
   <Section title="Trending" mediaType="Movie" hrefToSeeMore="/">
      <ListMoviesTrending movies={datas.results}/>
   </Section>
  );
}

function ListMoviesTrending({ movies }: { movies: Movie[] }) {
  return (
    <div className={styles.containerMovies}>
      {movies
        .filter((movie, index) => index < 5)
        .map((movie) => (
          <Link
            href={`/movie/${movie.id}`}
            key={movie.id}
            title="View Movie"
            className={styles.cardLink}
          >
            <CardMovieTrending
              mediaType={movie.media_type}
              releaseDate={movie.release_date}
              title={movie.title}
              posterPath={movie.poster_path}
            />
            <div className={styles.hoverPoster}>
              <div className={styles.containerText}>
                <IconEye className={styles.iconView} />
                <span className={styles.textHover}>View</span>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
