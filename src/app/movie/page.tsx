import { getGenresMovie } from "@/api/tmdb";
import Search from "@/components/Search";
import styles from "./styles.module.css";
import Link from "next/link";

//TODO: add card de cada genre
//TODO: cada card deve ser um link para uma page com listagem de filmes de acordo com o genre escolhido, dentro da page de listagem deve haver uma paginação ou uma forma de loader de dados de filme de acordo com a necessidade do usuario
//TODO: cada card de movie filtrado por genre deve levar ao segmento de movie/id para mostrar page de details de um filme
//TODO: pensar em uma forma de como implementar uma paginação no cliente ou server ver qual e o ideal para a necessidade, aqui. ao clicar em um card de genre deve levar a uma page com films de acordo com aquele genre e ter uma forma de carregar os movies dinamicamente de acordo com a necessidade

export default async function Page() {
  const datas = await getGenresMovie();

  return (
    <>
      <header className={styles.header}>
        <Search placeholder="Search for movies" />
        <h1 className={`headingL ${styles.title}`}>Genres Movies</h1>
      </header>
      <main className={styles.main}>
        <ul className={styles.list}>
          {datas.genres.map((genre) => (
            <li key={genre.id} className={styles.card}>
              <Link
                href={`/movie/genre/${genre.id}`}
                title={`View Movies With genre ${genre.name}`}
                rel="next"
                className={styles.link}
              >
                <span className={styles.textLink}>{genre.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
