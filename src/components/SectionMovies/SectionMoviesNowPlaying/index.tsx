import { getNowPlayingMovies } from "@/api/tmdb";
import List from "@/components/List";
import Section from "@/components/Section";
import { renderCardMovie } from "..";

export default async function SectionMoviesNowPlaying() {
  const datas = await getNowPlayingMovies();
  return (
    <Section title="Now Playing" mediaType="Movie" hrefToSeeMore="/" type="common">
      <List
        mediaType="movie"
        items={datas.results}
        limitRenderingItems={6}
        type="common"
        renderItem={renderCardMovie}
      />
    </Section>
  );
}
