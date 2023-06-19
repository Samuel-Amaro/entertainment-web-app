import { getAiringTodayTv } from "@/api/tmdb";
import List from "@/components/List";
import Section from "@/components/Section";
import { renderCardTv } from "..";

export default async function SectionAiringToday() {
  const datas = await getAiringTodayTv();

  return (
    <Section
      title="Airing Today"
      mediaType="Tv"
      hrefToSeeMore={{
        pathname: "/tv/list/airing-today",
        query: {
          page: 1,
        },
      }}
      type="common"
      description="A list of TV shows airing today."
    >
      <List
        items={datas.results}
        limitRenderingItems={10}
        type="common"
        renderItem={renderCardTv}
        mediaType="tv"
      />
    </Section>
  );
}
