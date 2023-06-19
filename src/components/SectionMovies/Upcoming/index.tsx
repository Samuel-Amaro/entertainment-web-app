import { getUpcomingMovies } from "@/api/tmdb";
import List from "@/components/List";
import Section from "@/components/Section";
import { renderCardMovie } from "..";

export default async function SectionMoviesUpcoming() {
  const datas = await getUpcomingMovies();

  return (
    <Section
      title="Upcoming"
      mediaType="Movie"
      hrefToSeeMore={{
        pathname: "/movie/list/upcoming",
        query: {
          page: 1,
        },
      }}
      type="common"
      description="A list of movies that are being released soon."
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
