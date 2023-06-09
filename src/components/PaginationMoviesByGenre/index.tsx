"use client";
import { getPageMoviesByGenre } from "@/api/tmdb";
import Link from "next/link";
import List from "../List";
import { renderCardMovie } from "../SectionMovies";
import styles from "./styles.module.css";
import useSWR from "swr";
import { ResponsePaginationMoviesByGenre } from "@/types";
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
      "Failed to fetch datas by movies from genre, datas pagination"
    );
  }

  const datas: Promise<ResponsePaginationMoviesByGenre> = response.json();

  return datas;
}

export default /*async*/ function PaginationMoviesByGenre({
  idGenre,
  pageIndex,
  nameGenre,
}: Props) {
  /*const datasPagination = await getPageMoviesByGenre(idGenre, pageIndex);*/
  const { data, error, isLoading } = useSWR(
    `/api/movie/genre/${idGenre}?page=${pageIndex}`,
    fetcher
  );

  if (isLoading) {
    return <SkeletonPagination limitRenderingItems={20} />;
  }

  if (!data) throw new Error("Failed Fetch datas pagination movies from genre");

  return (
    <>
      <div className={styles.wrapperList} aria-live="polite" aria-atomic="true">
        <List
          mediaType="movie"
          items={data.results /*datasPagination.results*/}
          limitRenderingItems={20}
          type="common"
          renderItem={renderCardMovie}
        />
      </div>
      <div className={styles.containerButtons}>
        {pageIndex > 1 && (
          <Link
            href={{
              pathname: `/movie/genre/${idGenre}`,
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
          {/*datasPagination.page*/ data.page} of{" "}
          {data.total_pages /*datasPagination.total_pages*/}
        </p>
        {pageIndex < data.total_pages /*datasPagination.total_pages*/ && (
          <Link
            href={{
              pathname: `/movie/genre/${idGenre}`,
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
