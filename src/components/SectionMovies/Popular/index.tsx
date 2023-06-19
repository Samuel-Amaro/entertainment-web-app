import { getPopularMovies } from "@/api/tmdb";
import List from "@/components/List";
import Section from "@/components/Section";
import { renderCardMovie } from "..";

export default async function SectionPopularMovies() {
  const datas = await getPopularMovies();

  return (
    <Section
      title="Popular"
      mediaType="Movie"
      hrefToSeeMore={{
        pathname: "/movie/list/popular",
        query: {
          page: 1,
        },
      }}
      type="common"
      description="A list of movies ordered by popularity."
    >
      <List
        items={datas.results}
        limitRenderingItems={10}
        type="common"
        renderItem={renderCardMovie}
        mediaType="movie"
      />
    </Section>
  );
}
