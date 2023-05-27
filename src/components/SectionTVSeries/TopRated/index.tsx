import List from "@/components/List";
import Section from "@/components/Section";
import { renderCardTv } from "..";
import { getTopRatedTv } from "@/api/tmdb";

export default async function SectionTopRatedTv() {
  const datas = await getTopRatedTv();

  return (
    <Section
      title="Top Rated"
      mediaType="Tv"
      hrefToSeeMore="/"
      type="common"
      description="A list of TV shows ordered by rating."
    >
      <List
        items={datas.results}
        limitRenderingItems={6}
        type="common"
        renderItem={renderCardTv}
        mediaType="tv"
      />
    </Section>
  );
}
