import { getVideosMovie } from "@/api/tmdb";
import { getTrailerMovie } from "@/utils";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";

export default async function ModalVideo({ idMovie }: { idMovie: number }) {
  const listOfVideos = await getVideosMovie(idMovie);
  const trailerMovie = getTrailerMovie(listOfVideos.results);

  if (!trailerMovie) return null;

  //TODO: adicionar estilos mobile-first, tornar o iframe responsivo

  const ui = (
    <div>
      <div role="dialog" id="dialog" aria-labelledby="label" aria-modal="true">
        <h1 id="label">Play Trailer</h1>
        <div>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailerMovie.key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );

  return createPortal(ui, document.body);
}
