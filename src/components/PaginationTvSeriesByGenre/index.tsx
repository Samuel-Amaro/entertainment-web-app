"use client";
import { getPageTvSeriesByGenre } from "@/api/tmdb";
import Link from "next/link";
import List from "../List";
import styles from "./styles.module.css";
import { renderCardTv } from "../SectionTVSeries";
import { ResponsePaginationTVSeriesByGenre } from "@/types";
import useSWR from "swr";
import SkeletonPagination from "../Skeletons/Pagination";

type Props = {
  idGenre: number;
  pageIndex: number;
  nameGenre: string;
};

async function fetcher(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      "Failed to fetch datas by tv series from genre, datas pagination"
    );
  }

  const datas: Promise<ResponsePaginationTVSeriesByGenre> = response.json();

  return datas;
}

export default /*async*/ function PaginationTvSeriesByGenre({
  idGenre,
  pageIndex,
  nameGenre,
}: Props) {
  //const datasPagination = await getPageTvSeriesByGenre(idGenre, pageIndex);

  const { data, error, isLoading } = useSWR(
    `/api/tv/genre/${idGenre}?page=${pageIndex}`,
    fetcher
  );

  if (isLoading) {
    return <SkeletonPagination limitRenderingItems={20} />;
  }

  if (!data)
    throw new Error("Failed Fetch datas pagination tv from genre para view");

  return (
    <>
      <div className={styles.wrapperList} aria-live="polite" aria-atomic="true">
        <List
          mediaType="tv"
          items={data.results /*datasPagination.results*/}
          limitRenderingItems={20}
          type="common"
          renderItem={renderCardTv}
        />
      </div>
      <div className={styles.containerButtons}>
        {pageIndex > 1 && (
          <Link
            href={{
              pathname: `/tv/genre/${idGenre}`,
              query: { page: `${pageIndex - 1}`, name: `${nameGenre}` },
            }}
            rel="next"
            title="Visit page previous movies"
            className={styles.btnLink}
          >
            Previous
          </Link>
        )}
        <p className={styles.indicator} aria-live="polite" aria-atomic="true">
          {data.page /*datasPagination.page*/} of{" "}
          {data.total_pages /*datasPagination.total_pages*/}
        </p>
        {pageIndex < data.total_pages /*datasPagination.total_pages*/ && (
          <Link
            href={{
              pathname: `/tv/genre/${idGenre}`,
              query: { page: `${pageIndex + 1}`, name: `${nameGenre}` },
            }}
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
