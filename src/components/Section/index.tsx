import Link from "next/link";
import styles from "./Section.module.css";
import { Url } from "next/dist/shared/lib/router/router";

type PropsSection = {
  title: string;
  mediaType: string;
  hrefToSeeMore: Url;
  type: "trending" | "common";
  children: React.ReactNode;
  description: string;
};

export default function Section({
  title,
  mediaType,
  hrefToSeeMore,
  type,
  description,
  children,
}: PropsSection) {
  return (
    <section className={styles.section}>
      <header
        className={
          type === "trending"
            ? `${styles.header}`
            : `${styles.header} ${styles.headerModifierMg}`
        }
      >
        <div className={styles.headerContainer}>
          <h2 className={`headingL`}>{title}</h2>
          <span className={styles.indicator}>{mediaType}</span>
        </div>
        <Link
          href={hrefToSeeMore}
          title={`See more ${mediaType} ${title}`}
          className={styles.linkSeeMore}
        >
          See more
        </Link>
      </header>
      <p
        className={
          type === "trending"
            ? `${styles.description}`
            : `${styles.description} ${styles.headerModifierMg}`
        }
      >
        {description}
      </p>
      {children}
    </section>
  );
}
