import SkeletonCardTrendingMovie from "../CardTrendingMovie";
import styles from "./SectionTrendingMovie.module.css";

export default function SkeletonSectionTrendingMovie() {
  return (
    <section className={styles.section}>
      <SkeletonCardTrendingMovie />
      <SkeletonCardTrendingMovie />
      <SkeletonCardTrendingMovie />
      <SkeletonCardTrendingMovie />
      <SkeletonCardTrendingMovie />
    </section>
  );
}
