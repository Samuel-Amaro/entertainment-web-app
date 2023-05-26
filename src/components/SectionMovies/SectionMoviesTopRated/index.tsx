import { getTopRatedMovies } from "@/api/tmdb";
import List from "@/components/List";
import Section from "@/components/Section";
import { Movie, TV } from "@/types";
import { ReactNode } from "react";
import { renderCardMovie } from "..";

export default async function SectionMoviesTopRated() {
  const datas = await getTopRatedMovies();

  return (
    <Section
      title="Top Rated"
      mediaType="Movie"
      hrefToSeeMore="/"
      type="common"
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
