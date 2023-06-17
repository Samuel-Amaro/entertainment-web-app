"use client";

import { DataResponseSearchMulti, Movie, TV, TypeSearchFor } from "@/types";
import useSWR from "swr";
import SkeletonPagination from "../Skeletons/Pagination";
import Pagination from "../Pagination";
import { getIndexNextPage, getIndexPreviousPage } from "@/utils";
import List from "../List";
import Card from "../Card";
import styles from "./styles.module.css";

type PropsSearch = {
  searchFor: TypeSearchFor;
  query: string;
  pageIndex: number;
};

async function fetcher(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      "Failed to fetch datas from search de movies, or tv ou multiple, to pagination results"
    );
  }

  const datas: Promise<DataResponseSearchMulti> = response.json();

  return datas;
}

export function renderCardMultiple(
  datas: Movie | TV,
  typeCard: "trending" | "common",
  mediaType?: "movie" | "tv" | undefined
) {
  if (typeof datas === "object" && "title" in datas) {
    return (
      <Card
        typeCard={typeCard}
        id={datas.id}
        mediaType={mediaType ? mediaType : datas.media_type}
        date={datas.release_date}
        titleOrName={datas.title}
        posterPath={datas.poster_path}
      />
    );
  }
  return (
    <Card
      typeCard={typeCard}
      id={datas.id}
      mediaType={mediaType ? mediaType : datas.media_type}
      date={datas.first_air_date}
      titleOrName={datas.name}
      posterPath={datas.poster_path}
    />
  );
}

export default function Search({ searchFor, query, pageIndex }: PropsSearch) {
  const { data, error, isLoading } = useSWR(
    `/api/search/${searchFor}?query=${query}&page=${pageIndex}`,
    fetcher
  );

  if (isLoading) {
    return <SkeletonPagination limitRenderingItems={20} />;
  }

  if (!data)
    throw new Error(
      "Failed Fetch datas search to pagination, with error: " + error?.message
    );

  return (
    <>
      <h2 className={`headingM ${styles.title}`}>
        Found {data.total_results} Results
      </h2>
      <Pagination
        pageIndex={pageIndex}
        currentPage={data.page}
        totalPages={data.total_pages}
        hrefPagePrevious={{
          pathname: `/search/${searchFor}`,
          query: {
            query: query,
            page: getIndexPreviousPage(pageIndex),
          },
        }}
        hrefPageNext={{
          pathname: `/search/${searchFor}`,
          query: {
            query: query,
            page: getIndexNextPage(pageIndex),
          },
        }}
      >
        <List
          mediaType={searchFor === "multi" ? undefined : searchFor}
          items={data.results}
          limitRenderingItems={20}
          type="common"
          renderItem={renderCardMultiple}
        />
      </Pagination>
    </>
  );
}
