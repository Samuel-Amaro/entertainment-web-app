import { getNowPlayingMovies } from "@/api/tmdb";
import List from "@/components/List";
import Section from "@/components/Section";
import { renderCardMovie } from "..";

//TODO: NÃO ESTA MOSTRANDO FILMS DESTA LISTA PORQUE A PROPRIEDADE mediaType não vem definida no dados retornados da API, saber como resolver ISOO

export default async function SectionMoviesNowPlaying() {
  const datas = await getNowPlayingMovies();
  return (
    <Section title="Now Playing" mediaType="Movie" hrefToSeeMore="/" type="common">
      <List
        mediaType="movie"
        items={datas.results}
        limitRenderingItems={6}
        type="common"
        renderItem={renderCardMovie}
      />
    </Section>
  );
}
