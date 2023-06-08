import { getTrendingMovies } from "@/api/tmdb";
import styles from "./pagetrending.module.css";
import Link from "next/link";
import { renderCardMovie } from "@/components/SectionMovies";
import List from "@/components/List";
import Search from "@/components/Search";
import { Suspense } from "react";

type Props = {
  params: { page: number };
};

export const metadata = {
  title: "Trending Movies",
  description:
    "entertainment web application, which shows the most popular movies, series and favorite television programs, allowing you to obtain information.",
  keywords: [
    "Movies",
    "Series",
    "TV",
    "entertainment",
    "Genres",
    "Genres Movies",
    "Trending Movies",
    "Trending",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Trending Movies",
    description:
      "entertainment web application, which shows the most popular movies, series and favorite television programs, allowing you to obtain information.",
    url: "/movie/trending?page=1",
    type: "video.movie",
    siteName: "Entertainment web app",
  },
};

//TODO: add segmento de list para lists de movies, top rated, popular etc...
//TODO: ver como add uma loading para paginação para cada novos dados buscados

export default async function Page({ params }: Props) {
  let pageIndex = 1;

  if (
    params.page &&
    typeof params.page === "string" &&
    Number(params.page) > 0 &&
    Number(params.page) < 500 //api tmdb return http 422 page must be less than or equal to 500 if page < 0 and > 500
  ) {
    pageIndex = Number(params.page);
  }

  function getIndexNextPage() {
    return Number(pageIndex) + 1;
  }

  function getIndexPreviousPage() {
    return Number(pageIndex) - 1;
  }

  const datas = await getTrendingMovies(pageIndex);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Search placeholder="Search for movies" />
        <h1 className={`headingL ${styles.title}`}>Trending Movies</h1>
      </header>
      <main
        className={styles.wrapperList}
        aria-live="polite"
        aria-atomic="true"
      >
        <List
          items={datas.results}
          limitRenderingItems={20}
          type="common"
          renderItem={renderCardMovie}
        />
      </main>
      <footer className={styles.containerButtons}>
        {pageIndex > 1 && (
          <Link
            href={`/movie/trending/${getIndexPreviousPage()}`}
            rel="next"
            title="Visit page previous movies"
            className={styles.btnLink}
          >
            Previous
          </Link>
        )}
        <p className={styles.indicator} aria-live="polite" aria-atomic="true">
          {datas.page} of {datas.total_pages}
        </p>
        {pageIndex < datas.total_pages && (
          <Link
            href={`/movie/trending/${getIndexNextPage()}`}
            rel="next"
            title="Visit page next movies"
            className={styles.btnLink}
          >
            Next
          </Link>
        )}
      </footer>
    </div>
  );
}
