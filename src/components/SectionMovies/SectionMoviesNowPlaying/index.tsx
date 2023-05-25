import { getNowPlayingMovies } from "@/api/tmdb";
import Section from "@/components/Section";

export default async function SectionMoviesNowPlaying() {
  const datas = await getNowPlayingMovies();

  return (
    <Section title="Now Playing" mediaType="movie" hrefToSeeMore="/">

    </Section>
  );
}


