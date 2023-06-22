import { Suspense } from "react";
import styles from "./pagepaginationtv.module.css";
import SkeletonPagination from "@/components/Skeletons/Pagination";
import PaginationTvSeriesByGenre from "@/components/PaginationTvSeriesByGenre";
import { Metadata, ResolvingMetadata } from "next";
import FormSearch from "@/components/FormSearch";

type Props = {
  params: { id: number };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  let nameGenre = "";
  if (
    searchParams["name"] &&
    typeof searchParams["name"] === "string" &&
    searchParams["name"].trim() !== ""
  ) {
    nameGenre = searchParams["name"];
  }
  return {
    title: `TV Series by Genre ${nameGenre} - Entertainment web app`,
    description: `Genre-based ${nameGenre} TV Series`,
    keywords: [
      "Movies",
      "TV Shows",
      "Streaming",
      "Reviews",
      "API",
      "Actors",
      "Actresses",
      "Photos",
      "User Ratings",
      "Synopsis",
      "Trailers",
      "Teasers",
      "Credits",
      "Cast",
    ],
    icons: {
      icon: "/assets/logo.svg",
      shortcut: "/assets/logo.svg",
      apple: "/assets/logo.svg",
    },
    openGraph: {
      title: `TV Series by Genre ${nameGenre} - Entertainment web app`,
      description: `Genre-based ${nameGenre} TV Series`,
      type: "video.tv_show",
      url: `/tv/genre/${params.id}`,
      siteName: "Entertainment web app",
    },
  };
}

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
        <FormSearch placeholder="Search for TV Series" searchFor="tv" />
        <h1 className={`headingL ${styles.title}`}>
          TV Series genre {nameGenre}
        </h1>
      </header>
      <Suspense fallback={<SkeletonPagination limitRenderingItems={20} />}>
        <PaginationTvSeriesByGenre
          idGenre={params.id}
          pageIndex={pageIndex}
          nameGenre={nameGenre}
        />
      </Suspense>
    </div>
  );
}
