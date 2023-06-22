import { getTrendingTv } from "@/api/tmdb";
import styles from "./styles.module.css";
import FormSearch from "@/components/FormSearch";
import List from "@/components/List";
import { renderCardTv } from "@/components/SectionTVSeries";
import Link from "next/link";
import { getIndexNextPage, getIndexPreviousPage } from "@/utils";

type Props = {
  params: { page: number };
};

export const metadata = {
  title: "Trending Tv Series - Entertainment web app",
  description:
    "entertainment web application, which shows the most popular movies, series and favorite television programs, allowing you to obtain information.",
  keywords: [
    "Movies",
    "Series",
    "TV",
    "entertainment",
    "Genres",
    "Genres Tv Series",
    "Trending Tv Series",
    "Trending",
  ],
  icons: {
    icon: "/assets/logo.svg",
    shortcut: "/assets/logo.svg",
    apple: "/assets/logo.svg",
  },
  openGraph: {
    title: "Trending Tv Series - Entertainment web app",
    description:
      "entertainment web application, which shows the most popular movies, series and favorite television programs, allowing you to obtain information.",
    url: "/tv/trending?page=1",
    type: "video.tv_show",
    siteName: "Entertainment web app",
  },
};

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

  const datas = await getTrendingTv(pageIndex);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <FormSearch placeholder="Search for Tv Series" searchFor="tv" />
        <h1 className={`headingL ${styles.title}`}>Trending TV Series</h1>
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
          renderItem={renderCardTv}
        />
      </main>
      <footer className={styles.containerButtons}>
        {pageIndex > 1 && (
          <Link
            href={`/tv/trending/${getIndexPreviousPage(pageIndex)}`}
            rel="next"
            title="Visit page previous tv series"
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
            href={`/tv/trending/${getIndexNextPage(pageIndex)}`}
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
