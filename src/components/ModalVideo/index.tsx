import { getVideosMovie } from "@/api/tmdb";
import { getTrailerMovie } from "@/utils";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";
import Overlay from "../Overlay";

export default async function ModalVideo({
  idMovie,
  onHandleModal,
}: {
  idMovie: number;
  onHandleModal: (isOppen: boolean) => void;
}) {
  const listOfVideos = await getVideosMovie(idMovie);
  const trailerMovie = getTrailerMovie(listOfVideos.results);

  if (!trailerMovie) return null;

  const ui = (
    <Overlay onHandle={onHandleModal}>
      <div
        role="dialog"
        id="dialog"
        aria-labelledby="label"
        aria-modal="true"
        className={styles.modal}
      >
        <h1 id="label" className={`headingL ${styles.title}`}>
          Play Trailer
        </h1>
        <div className={styles.containerIframe}>
          <iframe
            className={styles.iframe}
            src={`https://www.youtube.com/embed/${trailerMovie.key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Overlay>
  );

  return createPortal(ui, document.body);
}
