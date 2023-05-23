"use client";

import Image from "next/image";
import { FormEvent } from "react";
import styles from "./Search.module.css";

export default function Search({ placeholder }: { placeholder: string }) {
  function handleSubmitFormSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmitFormSearch} className={styles.form}>
      <div className={styles.group}>
        <Image
          src="/assets/icon-search.svg"
          alt="Icon search"
          width={32}
          height={32}
          className={styles.icon}
        />
        <input
          type="search"
          placeholder={placeholder}
          title="Search for movies or TV series"
          name="search"
          aria-label={placeholder}
          className={styles.input}
        />
      </div>
      <button type="submit" title="Submit Search" aria-label="Search" className={styles.btn}>
        Search
      </button>
    </form>
  );
}
