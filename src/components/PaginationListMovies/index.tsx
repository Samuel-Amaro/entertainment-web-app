"use client";

import useSWR from "swr";
import { DataResponseNowPlayingMoviesOrUpcoming } from "@/types";
import SkeletonPagination from "../Skeletons/Pagination";
import { getIndexNextPage, getIndexPreviousPage } from "@/utils";
import Pagination from "../Pagination";
import { renderCardMovie } from "../SectionMovies";
import List from "../List";
import styles from "./styles.module.css";

type Props = {
  nameList: string;
  pageIndex: number;
};

async function fetcher(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      "Failed to fetch datas by movies from list movies, datas pagination"
    );
  }

  const datas: Promise<DataResponseNowPlayingMoviesOrUpcoming> =
    response.json();

  return datas;
}

export default async function PaginationListMovies({
  nameList,
  pageIndex,
}: Props) {
  const { data, error, isLoading } = useSWR(
    `/api/movie/list/${nameList}?page=${pageIndex}`,
    fetcher
  );

  if (isLoading) {
    return <SkeletonPagination limitRenderingItems={20} />;
  }

  if (!data)
    throw new Error(
      "Failed Fetch datas pagination movies from list movies to pagination, with error: " +
        error?.message
    );

  return (
    <Pagination
      pageIndex={pageIndex}
      currentPage={data.page}
      totalPages={data.total_pages}
      hrefPagePrevious={{
        pathname: `/movie/list/${nameList}`,
        query: {
          page: getIndexPreviousPage(pageIndex),
        },
      }}
      hrefPageNext={{
        pathname: `/movie/list/${nameList}`,
        query: { page: getIndexNextPage(pageIndex) },
      }}
    >
      <List
        mediaType="movie"
        items={data.results}
        limitRenderingItems={20}
        type="common"
        renderItem={renderCardMovie}
      />
    </Pagination>
  );
}
