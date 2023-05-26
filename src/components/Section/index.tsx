import Link from "next/link";
import styles from "./Section.module.css";

type PropsSection = {
  title: string;
  mediaType: string;
  hrefToSeeMore: string;
  type: "trending" | "common";
  children: React.ReactNode;
};

export default function Section({
  title,
  mediaType,
  hrefToSeeMore,
  type,
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
          <h2 className={`headingL ${styles.title}`}>{title}</h2>
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
      {children}
    </section>
  );
}
