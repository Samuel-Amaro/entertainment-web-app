import { Suspense } from "react";
import styles from "./pagepaginationtv.module.css";
import SkeletonPagination from "@/components/Skeletons/Pagination";
import PaginationTvSeriesByGenre from "@/components/PaginationTvSeriesByGenre";

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
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={`headingL ${styles.title}`}>
          TV Series genre {nameGenre}
        </h1>
      </header>
      <Suspense fallback={<SkeletonPagination limitRenderingItems={20} />}>
        {/* @ts-expect-error Async Server Component */}
        <PaginationTvSeriesByGenre
          idGenre={params.id}
          pageIndex={pageIndex}
          nameGenre={nameGenre}
        />
      </Suspense>
    </div>
  );
}
