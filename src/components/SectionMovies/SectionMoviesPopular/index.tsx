import { getPopularMovies } from "@/api/tmdb";
import List from "@/components/List";
import Section from "@/components/Section";
import { renderCardMovie } from "..";

export default async function SectionPopularMovies() {
  const datas = await getPopularMovies();

  return (
    <Section title="Popular" mediaType="Movie" hrefToSeeMore="/" type="common">
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
