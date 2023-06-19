import { getPopularTv } from "@/api/tmdb";
import List from "@/components/List";
import Section from "@/components/Section";
import { renderCardTv } from "..";

export default async function SectionPopularTv() {
  const datas = await getPopularTv();

  return (
    <Section
      title="Popular"
      mediaType="Tv"
      hrefToSeeMore={{
        pathname: "/tv/list/popular",
        query: {
          page: 1,
        },
      }}
      type="common"
      description="A list of TV shows ordered by popularity."
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
