import { getNowPlayingMovies } from "@/api/tmdb";
import List from "@/components/List";
import Section from "@/components/Section";
import { renderCardMovie } from "..";

export default async function SectionMoviesNowPlaying() {
  const datas = await getNowPlayingMovies();
  return (
    <Section
      title="Now Playing"
      mediaType="Movie"
      hrefToSeeMore={{
        pathname: "/movie/list/now-playing",
        query: {
          page: 1,
        },
      }}
      type="common"
      description="A list of movies that are currently in theatres."
    >
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
