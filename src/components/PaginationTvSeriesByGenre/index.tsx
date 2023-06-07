import { getPageTvSeriesByGenre } from "@/api/tmdb";
import Link from "next/link";
import List from "../List";
import styles from "./styles.module.css";
import { renderCardTv } from "../SectionTVSeries";

type Props = {
  idGenre: number;
  pageIndex: number;
  nameGenre: string;
};

export default async function PaginationMoviesByGenre({
  idGenre,
  pageIndex,
  nameGenre,
}: Props) {
  const datasPagination = await getPageTvSeriesByGenre(idGenre, pageIndex);

  return (
    <>
      <div className={styles.wrapperList} aria-live="polite" aria-atomic="true">
        <List
          mediaType="tv"
          items={datasPagination.results}
          limitRenderingItems={20}
          type="common"
          renderItem={renderCardTv}
        />
      </div>
      <div className={styles.containerButtons}>
        {pageIndex > 1 && (
          <Link
            href={`/tv/genre/${idGenre}?page=${
              pageIndex - 1
            }&name=${nameGenre}`}
            rel="next"
            title="Visit page previous movies"
            className={styles.btnLink}
          >
            Previous
          </Link>
        )}
        <p className={styles.indicator} aria-live="polite" aria-atomic="true">
          {datasPagination.page} of {datasPagination.total_pages}
        </p>
        {pageIndex < datasPagination.total_pages && (
          <Link
            href={`/tv/genre/${idGenre}?page=${
              pageIndex + 1
            }&name=${nameGenre}`}
            rel="next"
            title="Visit page next movies"
            className={styles.btnLink}
          >
            Next
          </Link>
        )}
      </div>
    </>
  );
}
