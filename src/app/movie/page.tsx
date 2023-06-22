import { getGenresMovie } from "@/api/tmdb";
import FormSearch from "@/components/FormSearch";
import styles from "./styles.module.css";
import Link from "next/link";

export const metadata = {
  title: "Genres Movies",
  description:
    "entertainment web application, which shows the most popular movies, series and favorite television programs, allowing you to obtain information.",
  keywords: [
    "Movies",
    "Series",
    "TV",
    "entertainment",
    "Genres",
    "Genres Movies",
  ],
  icons: {
    icon: "/assets/logo.svg",
    shortcut: "/assets/logo.svg",
    apple: "/assets/logo.svg",
  },
  openGraph: {
    title: "Entertainment web app",
    description:
      "entertainment web application, which shows the most popular movies, series and favorite television programs, allowing you to obtain information.",
    url: "/movie",
    type: "website",
    siteName: "Entertainment web app",
  },
};

export default async function Page() {
  const datas = await getGenresMovie();

  return (
    <>
      <header className={styles.header}>
        <FormSearch placeholder="Search for movies" searchFor="movie" />
        <h1 className={`headingL ${styles.title}`}>Genres Movies</h1>
      </header>
      <main className={styles.main}>
        <ul className={styles.list}>
          {datas.genres.map((genre) => (
            <li key={genre.id} className={styles.card}>
              <Link
                href={{
                  pathname: `/movie/genre/${genre.id}`,
                  query: { page: 1, name: `${genre.name}` },
                }}
                title={`View Movies With genre ${genre.name}`}
                rel="next"
                className={styles.link}
              >
                {genre.name}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
