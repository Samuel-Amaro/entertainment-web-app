import { getTopRatedMovies } from "@/api/tmdb";
import List from "@/components/List";
import Section from "@/components/Section";
import { renderCardMovie } from "..";

export default async function SectionMoviesTopRated() {
  const datas = await getTopRatedMovies();

  return (
    <Section
      title="Top Rated"
      mediaType="Movie"
      hrefToSeeMore="/"
      type="common"
      description="A list of movies ordered by rating."
    >
      <List
        items={datas.results}
        limitRenderingItems={6}
        type="common"
        mediaType="movie"
        renderItem={renderCardMovie}
      />
    </Section>
  );
}