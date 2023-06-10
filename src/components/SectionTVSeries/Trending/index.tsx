import { getTrendingTv } from "@/api/tmdb";
import List from "@/components/List";
import Section from "@/components/Section";
import { renderCardMovie } from "@/components/SectionMovies";
import { renderCardTv } from "..";

export default async function SectionTrendingTv() {
  const datas = await getTrendingTv();

  return (
    <Section
      title="Trending"
      mediaType="Tv"
      hrefToSeeMore="/tv/trending/1"
      type="trending"
      description="The trending TV shows"
    >
      <List
        items={datas.results}
        limitRenderingItems={5}
        type="trending"
        renderItem={renderCardTv}
      />
    </Section>
  );
}
