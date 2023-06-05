import PaginationMoviesByGenre from "@/components/PaginationMoviesByGenre";
import { Suspense } from "react";
import styles from "./styles.module.css";
import SkeletonPagination from "@/components/Skeletons/Pagination";
import { Metadata, ResolvingMetadata } from "next";

//TODO: add styles mobile-first
//TODO: add metadados da page

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
    title: `Movies by Genre ${nameGenre} - Entertainment web app`,
    description: `Genre-based ${nameGenre} movies`,
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
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
    openGraph: {
      title: `Movies by Genre ${nameGenre} - Entertainment web app`,
      description: `Genre-based ${nameGenre} movies`,
      type: "video.movie",
      url: `/movie/${params.id}`,
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
        <h1 className={`headingL ${styles.title}`}>Movies genre {nameGenre}</h1>
      </header>
      <Suspense fallback={<SkeletonPagination limitRenderingItems={20} />}>
        {/* @ts-expect-error Async Server Component */}
        <PaginationMoviesByGenre
          idGenre={params.id}
          pageIndex={pageIndex}
          nameGenre={nameGenre}
        />
      </Suspense>
    </div>
  );
}
