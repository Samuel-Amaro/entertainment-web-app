import Search from "@/components/Search";
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

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Search placeholder="Search for movies or TV Series" />
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<SkeletonSectionTrendingMovie limitRenderingItems={5} />}
        >
          {/* @ts-expect-error Async Server Component */}
          <SectionMoviesTreding />
        </Suspense>
        <Suspense fallback={<SkeletonSectionCommon limitRenderingItems={6} />}>
          {/* @ts-expect-error Async Server Component */}
          <SectionMoviesNowPlaying />
        </Suspense>
        <Suspense fallback={<SkeletonSectionCommon limitRenderingItems={6} />}>
          {/* @ts-expect-error Async Server Component */}
          <SectionPopularMovies />
        </Suspense>
        <Suspense fallback={<SkeletonSectionCommon limitRenderingItems={6} />}>
          {/* @ts-expect-error Async Server Component */}
          <SectionMoviesTopRated />
        </Suspense>
        <Suspense fallback={<SkeletonSectionCommon limitRenderingItems={6} />}>
          {/* @ts-expect-error Async Server Component */}
          <SectionMoviesUpcoming />
        </Suspense>
        <Suspense
          fallback={<SkeletonSectionTrending limitRenderingItems={5} />}
        >
          {/* @ts-expect-error Async Server Component */}
          <SectionTrendingTv />
        </Suspense>
        <Suspense fallback={<SkeletonSectionCommon limitRenderingItems={6} />}>
          {/* @ts-expect-error Async Server Component */}
          <SectionAiringToday />
        </Suspense>
        <Suspense fallback={<SkeletonSectionCommon limitRenderingItems={6} />}>
          {/* @ts-expect-error Async Server Component */}
          <SectionOnTheAirTv />
        </Suspense>
        <Suspense fallback={<SkeletonSectionCommon limitRenderingItems={6} />}>
          {/* @ts-expect-error Async Server Component */}
          <SectionPopularTv />
        </Suspense>
        <Suspense fallback={<SkeletonSectionCommon limitRenderingItems={6} />}>
          {/* @ts-expect-error Async Server Component */}
          <SectionTopRatedTv />
        </Suspense>
      </main>
    </>
  );
}
