import PaginationMoviesByGenre from "@/components/PaginationMoviesByGenre";
import { Suspense } from "react";

//TODO: add styles mobile-first

type Props = {
  params: { id: number };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function Page({ params, searchParams }: Props) {
  let nameGenre = "";
  let pageIndex = 1;
  if (
    searchParams["page"] &&
    typeof searchParams["page"] === "string" &&
    Number(searchParams["page"]) > 0 &&
    Number(searchParams["page"]) < 500 //http 422 page must be less than or equal to 500
  ) {
    pageIndex = Number(searchParams["page"]);
  }
  if (
    searchParams["name"] &&
    typeof searchParams["name"] === "string" &&
    searchParams["name"].trim() !== ""
  ) {
    nameGenre = searchParams["name"];
  }

  return (
    <>
      <header>
        <h1>Movies genre {nameGenre}</h1>
      </header>
      <Suspense fallback={<p>Loading datas page...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <PaginationMoviesByGenre
          idGenre={params.id}
          pageIndex={pageIndex}
          nameGenre={nameGenre}
        />
      </Suspense>
    </>
  );
}
