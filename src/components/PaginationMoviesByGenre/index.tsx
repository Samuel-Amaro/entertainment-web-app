import { getPageMoviesByGenre } from "@/api/tmdb";
import Link from "next/link";
import List from "../List";
import { renderCardMovie } from "../SectionMovies";

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
  const datasPagination = await getPageMoviesByGenre(idGenre, pageIndex);

  return (
    <>
      {
        <List
          mediaType="movie"
          items={datasPagination.results}
          limitRenderingItems={20}
          type="common"
          renderItem={renderCardMovie}
        />
      }
      <div>
        {pageIndex > 1 && (
          <Link
            href={`/movie/genre/${idGenre}?page=${
              pageIndex - 1
            }&name=${nameGenre}`}
            rel="next"
            title="Visit page previous movies"
          >
            Previous
          </Link>
        )}
        <p>
          {datasPagination.page} of {datasPagination.total_pages}
        </p>
        {pageIndex < datasPagination.total_pages && (
          <Link
            href={`/movie/genre/${idGenre}?page=${
              pageIndex + 1
            }&name=${nameGenre}`}
            rel="next"
            title="Visit page next movies"
          >
            Next
          </Link>
        )}
      </div>
    </>
  );
}
