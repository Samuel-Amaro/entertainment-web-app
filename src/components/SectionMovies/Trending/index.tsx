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
      hrefToSeeMore={{
        pathname: "/movie/trending",
        query: { page: 1 },
      }}
      type="trending"
      description="The trending movies"
    >
      <List
        items={datas.results}
        limitRenderingItems={5}
        type="trending"
        renderItem={renderCardMovie}
      />
    </Section>
  );
}
