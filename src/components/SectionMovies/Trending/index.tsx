import { getTrendingMovies } from "@/api/tmdb";
import Section from "../../Section";
import List from "@/components/List";
import { renderCardMovie } from "..";

export default async function SectionMoviesTreding() {
  const datas = await getTrendingMovies();
  return (
    <Section
      title="Trending"
      mediaType="Movie"
      hrefToSeeMore="movie/trending/1"
      type="trending"
      description="The trending movies"
    >
      <List
        items={datas.results}
        limitRenderingItems={20}
        type="trending"
        renderItem={renderCardMovie}
      />
    </Section>
  );
}
