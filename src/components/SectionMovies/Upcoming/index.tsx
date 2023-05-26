import { getUpcomingMovies } from "@/api/tmdb";
import List from "@/components/List";
import Section from "@/components/Section";
import { renderCardMovie } from "..";

export default async function SectionMoviesUpcoming() {
  const datas = await getUpcomingMovies();

  return (
    <Section
      title="Upcoming"
      mediaType="movie"
      hrefToSeeMore="/"
      type="common"
      description="A list of movies that are being released soon."
    >
      <List
        items={datas.results}
        limitRenderingItems={6}
        type="common"
        renderItem={renderCardMovie}
        mediaType="movie"
      />
    </Section>
  );
}
