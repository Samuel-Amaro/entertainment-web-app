"use client";

import { useState, KeyboardEvent, Suspense } from "react";
import IconPlay from "../Icons/IconPlay";
import styles from "./styles.module.css";
import ModalVideo from "../ModalVideo";

export default function PlayerVideo({ idMovie }: { idMovie: number }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  function handleKeydown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Enter" || event.key === "") {
      setIsClicked(!isClicked);
    }
  }

  return (
    <>
      <button
        type="button"
        title="Play Trailer"
        aria-label="Play Trailer"
        className={styles.btnPlay}
        onClick={handleClick}
        onKeyDown={handleKeydown}
      >
        <IconPlay className={styles.iconBtnPlay} />
        <span className={styles.textBtn}>Play Trailer</span>
      </button>
      {isClicked && (
        <Suspense fallback="Loading Trailer Movie...">
          {/* @ts-expect-error Async Server Component */}
          <ModalVideo idMovie={idMovie} />
        </Suspense>
      )}
    </>
  );
}
