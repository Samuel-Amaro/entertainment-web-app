import Search from "@/components/Search";
import SectionMoviesTreding from "@/components/SectionMovies/SectionMoviesTrending";
import { Suspense } from "react";
import styles from "./page.module.css";
import SkeletonSectionTrendingMovie from "@/components/Skeletons/SectionTrending";
import SectionMoviesNowPlaying from "@/components/SectionMovies/SectionMoviesNowPlaying";
import SkeletonSectionCommon from "@/components/Skeletons/SectionCommon";
import SectionPopularMovies from "@/components/SectionMovies/SectionMoviesPopular";

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
      </main>
    </>
  );
}
