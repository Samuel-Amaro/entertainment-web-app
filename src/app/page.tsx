import Search from "@/components/Search";
import SectionMoviesTreding from "@/components/SectionMoviesTrending";
import { Suspense } from "react";
import styles from "./page.module.css";
import SkeletonSectionTrendingMovie from "@/components/Skeletons/SectionTrendingMovie";

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
      </main>
    </>
  );
}
