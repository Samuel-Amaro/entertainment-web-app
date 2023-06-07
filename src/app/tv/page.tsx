import { getGenresTvSeries } from "@/api/tmdb";
import Search from "@/components/Search";
import styles from "./pagetv.module.css";
import Link from "next/link";

export default async function Page() {
  const datas = await getGenresTvSeries();

  return (
    <>
      <header className={styles.header}>
        <Search placeholder="Search for TV Series" />
        <h1 className={`headingL ${styles.title}`}>Genres Movies</h1>
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
