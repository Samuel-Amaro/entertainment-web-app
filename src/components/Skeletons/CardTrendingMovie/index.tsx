import styles from "./CardTrendingMovie.module.css";

export default function SkeletonCardTrendingMovie() {
  return (
    <div className={`${styles.cardTrendingMovie} ${styles.skeleton}`}></div>
  );
}
