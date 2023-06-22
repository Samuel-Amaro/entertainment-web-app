import styles from "./styles.module.css";
import FormSearch from "@/components/FormSearch";
import { Suspense } from "react";
import SkeletonPagination from "@/components/Skeletons/Pagination";
import { Metadata, ResolvingMetadata } from "next";
import PaginationListTvSeries from "@/components/PaginationListTvSeries";

type Props = {
  params: { name: string };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: `${params.name
      .split("-")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ")} - Entertainment web app`,
    description:
      "entertainment web application, which shows the most popular movies, series and favorite television programs, allowing you to obtain information.",
    keywords: [
      "Movies",
      "Series",
      "TV",
      "entertainment",
      "Lists Tv Series",
      "Pagination Tv Series",
      "Airing Today TV",
      "On The Air TV",
      "Popular TV",
      "Top Rated TV",
    ],
    icons: {
      icon: "/assets/logo.svg",
      shortcut: "/assets/logo.svg",
      apple: "/assets/logo.svg",
    },
    openGraph: {
      title: `${params.name
        .split("-")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ")} - Entertainment web app`,
      description:
        "entertainment web application, which shows the most popular movies, series and favorite television programs, allowing you to obtain information.",
      url: `/tv/list/${params.name}?page=${
        searchParams["page"] &&
        typeof searchParams["page"] === "string" &&
        !isNaN(Number(searchParams["page"]))
          ? Number(searchParams["page"])
          : 1
      }`,
      type: "video.tv_show",
      siteName: "Entertainment web app",
    },
  };
}

export default function Page({ params, searchParams }: Props) {
  let pageIndex =
    searchParams["page"] && typeof searchParams["page"] === "string"
      ? Number(searchParams["page"])
      : 1;
  if (
    typeof pageIndex !== "number" ||
    pageIndex <= 0 ||
    pageIndex >= 500 ||
    isNaN(pageIndex)
    //http 422 page must be less than or equal to 500
  ) {
    pageIndex = 1;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <FormSearch placeholder="Search for Tv Series" searchFor="tv" />
        <h1 className={`headingL ${styles.title}`}>
          {params.name
            .split("-")
            .map((word) => {
              return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join(" ")}{" "}
          Tv Series
        </h1>
      </header>
      <main className={styles.wrapperList}>
        <Suspense fallback={<SkeletonPagination limitRenderingItems={20} />}>
          <PaginationListTvSeries
            nameList={params.name}
            pageIndex={pageIndex}
          />
        </Suspense>
      </main>
    </div>
  );
}
