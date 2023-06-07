import { getGenresTvSeries } from "@/api/tmdb";
import Search from "@/components/Search";
import styles from "./pagetv.module.css";
import Link from "next/link";

export const metadata = {
  title: "Genres TV Series",
  description:
    "entertainment web application, which shows the most popular movies, series and favorite television programs, allowing you to obtain information.",
  keywords: [
    "Movies",
    "Series",
    "TV",
    "entertainment",
    "Genres",
    "Genres Movies",
    "Genres TV Series",
    "TV Series",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
  const datas = await getGenresTvSeries();

  return (
    <>
      <header className={styles.header}>
        <Search placeholder="Search for TV Series" />
        <h1 className={`headingL ${styles.title}`}>Genres TV Series</h1>
      </header>
      <main className={styles.main}>
        <ul className={styles.list}>
          {datas.genres.map((genre) => (
            <li key={genre.id} className={styles.card}>
              <Link
                href={`/tv/genre/${genre.id}?page=1&name=${genre.name}`}
                title={`View TV Serie With genre ${genre.name}`}
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