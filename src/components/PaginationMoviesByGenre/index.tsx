"use client";

import { ResponsePaginationMoviesByGenre } from "@/types";
import { useState } from "react";
import useSWR from "swr";

type Props = {
  idGenre: number;
};

async function fetcher(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      "Error in fecht datas to pagination from movies from a genre"
    );
  }

  return response.json() as unknown as ResponsePaginationMoviesByGenre;
}

export default function PaginationMoviesByGenre({ idGenre }: Props) {
  const [pageIndex, setPageIndex] = useState(1);

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_ENDPOINT_API}discover/movie?api_key=${process.env.NEXT_PUBLIC_KEY_API}&with_genres=${idGenre}&page=${pageIndex}`,
    fetcher
  );

  if (error) {
    return <p>Error in fetch datas pagination movies</p>;
  }

  if (isLoading || !data) {
    return <h1>Loading datas pagination movies by genres....</h1>;
  }

  return (
    <>
      <h2>Pagination</h2>
      <ul>
        {data.results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
}
