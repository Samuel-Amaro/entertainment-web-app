import { getNowPlayingMovies } from "@/api/tmdb";
import styles from "./styles.module.css";
import Search from "@/components/Search";
import List from "@/components/List";
import { renderCardMovie } from "@/components/SectionMovies";
import { getIndexNextPage, getIndexPreviousPage } from "@/utils";
import Pagination from "@/components/Pagination";

type Props = {
  params: { page: number };
};

export const metadata = {
  title: "Now Playing Movies - Entertainment web app",
  description:
    "entertainment web application, which shows the most popular movies, series and favorite television programs, allowing you to obtain information.",
  keywords: [
    "Movies",
    "Series",
    "TV",
    "entertainment",
    "Genres",
    "Genres Movies",
    "Now Playing Movies",
    "Now Playing Movies",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Now Playing Movies - Entertainment web app",
    description:
      "entertainment web application, which shows the most popular movies, series and favorite television programs, allowing you to obtain information.",
    url: "/movie/list/now-playing/1",
    type: "video.movie",
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

  const datas = await getNowPlayingMovies(pageIndex);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Search placeholder="Search for movies" />
        <h1 className={`headingL ${styles.title}`}>Now Playing Movies</h1>
      </header>
      <Pagination
        pageIndex={pageIndex}
        currentPage={datas.page}
        totalPages={datas.total_pages}
        hrefPagePrevious={`/movie/list/now-playing/${getIndexPreviousPage(
          pageIndex
        )}`}
        hrefPageNext={`/movie/list/now-playing/${getIndexNextPage(pageIndex)}`}
      >
        <main className={styles.wrapperList}>
          <List
            mediaType="movie"
            items={datas.results}
            limitRenderingItems={20}
            type="common"
            renderItem={renderCardMovie}
          />
        </main>
      </Pagination>
    </div>
  );
}
