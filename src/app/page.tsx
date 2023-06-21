import FormSearch from "@/components/FormSearch";
import SectionMoviesTreding from "@/components/SectionMovies/Trending";
import { Suspense } from "react";
import styles from "./page.module.css";
import SkeletonSectionTrendingMovie from "@/components/Skeletons/SectionTrending";
import SectionMoviesNowPlaying from "@/components/SectionMovies/NowPlaying";
import SkeletonSectionCommon from "@/components/Skeletons/SectionCommon";
import SectionPopularMovies from "@/components/SectionMovies/Popular";
import SectionMoviesTopRated from "@/components/SectionMovies/TopRated";
import SectionMoviesUpcoming from "@/components/SectionMovies/Upcoming";
import SectionTrendingTv from "@/components/SectionTVSeries/Trending";
import SkeletonSectionTrending from "@/components/Skeletons/SectionTrending";
import SectionAiringToday from "@/components/SectionTVSeries/AiringToday";
import SectionOnTheAirTv from "@/components/SectionTVSeries/OnTheAir";
import SectionPopularTv from "@/components/SectionTVSeries/Popular";
import SectionTopRatedTv from "@/components/SectionTVSeries/TopRated";

//TODO: ADD STYLES PARA DESKTOP para todo o APP
//TODO: ver se a API DO TMDB voltou a estar disponivel
//TODO: add produtores e escritores de um movie, na page de details, para colocar mais informações,
//TODO: onde achar que precisar fazer refatoração pode ir em frente
//TODO: add mais detalhes a page de details, como certifications, ver poque não conseguimos add todos atores que participaram de uma serie, ver como fazer isso
//TODO: add a causa do error nas mensagens de erro, de cada consumo de api para entender oque esta acontecendo

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <FormSearch
          placeholder="Search for movies or TV Series"
          searchFor="multi"
        />
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<SkeletonSectionTrendingMovie limitRenderingItems={20} />}
        >
          <SectionMoviesTreding />
        </Suspense>
        <Suspense fallback={<SkeletonSectionCommon limitRenderingItems={10} />}>
          <SectionMoviesNowPlaying />
        </Suspense>
        <Suspense fallback={<SkeletonSectionCommon limitRenderingItems={10} />}>
          <SectionPopularMovies />
        </Suspense>
        <Suspense fallback={<SkeletonSectionCommon limitRenderingItems={10} />}>
          <SectionMoviesTopRated />
        </Suspense>
        <Suspense fallback={<SkeletonSectionCommon limitRenderingItems={10} />}>
          <SectionMoviesUpcoming />
        </Suspense>
        <Suspense
          fallback={<SkeletonSectionTrending limitRenderingItems={20} />}
        >
          <SectionTrendingTv />
        </Suspense>
        <Suspense fallback={<SkeletonSectionCommon limitRenderingItems={10} />}>
          <SectionAiringToday />
        </Suspense>
        <Suspense fallback={<SkeletonSectionCommon limitRenderingItems={10} />}>
          <SectionOnTheAirTv />
        </Suspense>
        <Suspense fallback={<SkeletonSectionCommon limitRenderingItems={10} />}>
          <SectionPopularTv />
        </Suspense>
        <Suspense fallback={<SkeletonSectionCommon limitRenderingItems={10} />}>
          <SectionTopRatedTv />
        </Suspense>
      </main>
    </div>
  );
}
