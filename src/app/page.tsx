import Search from "@/components/Search";
import SectionMoviesTreding from "@/components/SectionMovies/SectionMoviesTrending";
import { Suspense } from "react";
import styles from "./page.module.css";
import SkeletonSectionTrendingMovie from "@/components/Skeletons/SectionTrendingMovie";
import SectionMoviesNowPlaying from "@/components/SectionMovies/SectionMoviesNowPlaying";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Search placeholder="Search for movies or TV Series" />
      </header>
      <main className={styles.main}>
        <Suspense fallback={<SkeletonSectionTrendingMovie />}>
          {/* @ts-expect-error Async Server Component */}
          <SectionMoviesTreding />
        </Suspense>
        <Suspense fallback={<p>Loading movies Now Playing...</p>}>
          {/* @ts-expect-error Async Server Component */}
          <SectionMoviesNowPlaying />
        </Suspense>
      </main>
    </>
  );
}
