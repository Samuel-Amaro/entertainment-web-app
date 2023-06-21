import {
  getCreditsMovie,
  getDetailsMovie,
  getListOfLanguages,
  getReleaseDateAndCertificationMovie,
  getVideosMovie,
} from "@/api/tmdb";
import {
  convertMinutesInHours,
  formatNumber,
  getCertificationMovie,
  getLanguage,
  getVideoTrailer,
  shimer,
  toBase64,
} from "@/utils";
import Image from "next/image";
import Link from "next/link";
import styles from "./movie.module.css";
import { Metadata, ResolvingMetadata } from "next";
import IconLink from "@/components/Icons/IconLink";
import PlayerVideo from "@/components/PlayerVideo";

type Props = {
  params: { id: number };
};

export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const detailsMovie = await getDetailsMovie(params.id);

  return {
    title: `${detailsMovie.title} (${new Date(
      detailsMovie.release_date
    ).getFullYear()}) - Entertainment web app`,
    description: detailsMovie.overview,
    keywords: [
      "Movies",
      "TV Shows",
      "Streaming",
      "Reviews",
      "API",
      "Actors",
      "Actresses",
      "Photos",
      "User Ratings",
      "Synopsis",
      "Trailers",
      "Teasers",
      "Credits",
      "Cast",
    ],
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
    openGraph: {
      title: detailsMovie.title,
      description: detailsMovie.overview,
      type: "video.movie",
      url: `/movie/${params.id}`,
      siteName: "Entertainment web app",
      images: [
        `https://image.tmdb.org/t/p/w500${detailsMovie.poster_path}`,
        `https://image.tmdb.org/t/p/w780${detailsMovie.poster_path}`,
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const detailsMovie = await getDetailsMovie(params.id);
  const creditsMovie = await getCreditsMovie(params.id);
  const listOfLanguages = await getListOfLanguages();
  const listOfVideos = await getVideosMovie(params.id);
  const certificationAndReleaseDates =
    await getReleaseDateAndCertificationMovie(params.id);
  const trailer = getVideoTrailer(listOfVideos.results);
  const certification = getCertificationMovie(
    certificationAndReleaseDates.results,
    "US"
  );

  return (
    <>
      <main className={styles.main}>
        <section className={styles.sectionSummary}>
          <div
            className={
              detailsMovie.poster_path
                ? styles.wrapperImagePoster
                : styles.wrapperImagePosterEmpty
            }
          >
            {detailsMovie.poster_path && (
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${detailsMovie.poster_path}`}
                alt={`poster movie ${detailsMovie.title}`}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimer(240, 140)
                )}`}
                width={300}
                height={300}
                className={styles.posterImage}
                title={`poster movie ${detailsMovie.title}`}
              />
            )}
          </div>
          <div>
            <h1 className={`headingL ${styles.title}`}>
              <span className={styles.titleText}>{detailsMovie.title}</span>{" "}
              <span className={styles.titleYear}>{`(${
                typeof new Date(detailsMovie.release_date).getFullYear() !==
                  "number" ||
                isNaN(new Date(detailsMovie.release_date).getFullYear())
                  ? "No Year"
                  : new Date(detailsMovie.release_date).getFullYear()
              })`}</span>
            </h1>
            <div className={styles.metadatas}>
              {certification && (
                <p
                  title={certification.descriptors}
                  className={styles.certification}
                >
                  {certification.certification}
                </p>
              )}
              <p className={styles.metadataDate}>{detailsMovie.release_date}</p>
              <span className={styles.diviser}></span>
              <ul className={styles.metadataGenres}>
                {detailsMovie.genres.map((genre) => (
                  <li key={genre.id} className={styles.genre}>
                    {genre.name}
                  </li>
                ))}
              </ul>
              <span className={styles.diviser}></span>
              <p className={styles.metadataRuntime}>
                {convertMinutesInHours(detailsMovie.runtime)}
              </p>
            </div>
            {trailer && <PlayerVideo video={trailer} />}
            <div>
              <em className={styles.tagline}>{detailsMovie.tagline}</em>
              <h2 className={`headingM ${styles.subtitle}`}>Overview</h2>
              <p className={styles.overview}>{detailsMovie.overview}</p>
            </div>
          </div>
        </section>
        <section className={styles.sectionInfo}>
          <div className={styles.containerInfo}>
            <p className={styles.info}>
              <span className={styles.data}>Status</span>
              <span className={styles.valueData}>{detailsMovie.status}</span>
            </p>
            <p className={styles.info}>
              <span className={styles.data}>Original Language</span>
              <span className={styles.valueData}>
                {getLanguage(detailsMovie.original_language, listOfLanguages)}
              </span>
            </p>
            <p className={styles.info}>
              <span className={styles.data}>Original title</span>
              <span className={styles.valueData}>
                {detailsMovie.original_title}
              </span>
            </p>
            <p className={styles.info}>
              <span className={styles.data}>Budget</span>
              <span className={styles.valueData}>
                {formatNumber(detailsMovie.budget)}
              </span>
            </p>
            <p className={styles.info}>
              <span className={styles.data}>Revenue</span>
              <span className={styles.valueData}>
                {formatNumber(detailsMovie.revenue)}
              </span>
            </p>
          </div>
          <Link
            href={detailsMovie.homepage}
            target="_blank"
            rel="external"
            title="Visit Home Page"
            className={styles.linkHomePage}
          >
            <IconLink className={styles.iconLink} />
          </Link>
        </section>
        <section>
          <h2 className={`headingM ${styles.subtitle}`}>Casts</h2>
          <ul className={styles.list}>
            {creditsMovie.cast.map((cast) => (
              <li key={cast.id} className={styles.card}>
                <div
                  className={
                    cast.profile_path
                      ? styles.wrapperProfile
                      : styles.wrapperProfileEmpty
                  }
                >
                  {cast.profile_path && (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${cast.profile_path}`}
                      alt={`Profile ${cast.original_name} with character ${cast.character}`}
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimer(240, 140)
                      )}`}
                      width={150}
                      height={150}
                      title={`Profile ${cast.original_name} with character ${cast.character}`}
                      className={styles.profileImg}
                    />
                  )}
                </div>
                <div className={styles.datasCard}>
                  <p className={styles.originalName}>{cast.original_name}</p>
                  <p className={styles.character}>{cast.character}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
