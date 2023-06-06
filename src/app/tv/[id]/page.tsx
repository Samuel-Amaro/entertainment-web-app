import {
  getCreditsTvSeries,
  getDetailsTvSeries,
  getListOfLanguages,
  getVideosTvSeries,
} from "@/api/tmdb";
import IconLink from "@/components/Icons/IconLink";
import PlayerVideo from "@/components/PlayerVideo";
import { getLanguage, getVideoTrailer, shimer, toBase64 } from "@/utils";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./tvdetails.module.css";

type Props = {
  params: { id: number };
};

//TODO: add styles mobile-first

export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const detailsTvSeries = await getDetailsTvSeries(params.id);

  return {
    title: `${detailsTvSeries.name} (TV Series ${new Date(
      detailsTvSeries.first_air_date
    ).getFullYear()}) - Entertainment web app`,
    description: detailsTvSeries.overview,
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
      title: detailsTvSeries.name,
      description: detailsTvSeries.overview,
      type: "video.tv_show",
      url: `/tv/${params.id}`,
      siteName: "Entertainment web app",
      images: [
        `https://image.tmdb.org/t/p/w500${detailsTvSeries.poster_path}`,
        `https://image.tmdb.org/t/p/w780${detailsTvSeries.poster_path}`,
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const detailsTvSeries = await getDetailsTvSeries(params.id);
  const listOfLanguages = await getListOfLanguages();
  const creditsTvSeries = await getCreditsTvSeries(params.id);
  const listOfVideos = await getVideosTvSeries(params.id);
  const trailer = getVideoTrailer(listOfVideos.results);

  return (
    <main className={styles.main}>
      <section className={styles.sectionSummary}>
        <div className={styles.wrapperImagePoster}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${detailsTvSeries.poster_path}`}
            alt={`poster tv series ${detailsTvSeries.original_name}`}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimer(240, 140)
            )}`}
            width={300}
            height={300}
            title={`poster tv series ${detailsTvSeries.original_name}`}
            className={styles.posterImage}
          />
        </div>
        <div>
          <h1 className={`headingL ${styles.title}`}>
            <span>{detailsTvSeries.original_name}</span>{" "}
            <span>{`(${new Date(
              detailsTvSeries.first_air_date
            ).getFullYear()})`}</span>
          </h1>
          <p className={styles.metadatas}>
            <span className={styles.metadataGenres}>
              {detailsTvSeries.genres.map((genre) => genre.name).join(",")}
            </span>
          </p>
          {trailer && <PlayerVideo video={trailer} />}
          <div className={styles.summary}>
            {detailsTvSeries.tagline && (
              <em className={styles.tagline}>{detailsTvSeries.tagline}</em>
            )}
            {detailsTvSeries.overview && (
              <>
                <h2 className={`headingM ${styles.subtitle}`}>Overview</h2>
                <p className={styles.overview}>{detailsTvSeries.overview}</p>
              </>
            )}
          </div>
          {detailsTvSeries.created_by.length > 0 && (
            <ol className={styles.listCreators}>
              {detailsTvSeries.created_by.map((people) => (
                <li key={people.id} className={styles.cardCreator}>
                  <span className={`headingS ${styles.namePeople}`}>
                    {people.name}
                  </span>
                  <span className={styles.indicator}>Creator</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>
      <section className={styles.sectionInfo}>
        <h2 className={`headingM ${styles.subtitle}`}>Information</h2>
        <div className={styles.containerInfo}>
          <p className={styles.info}>
            <span className={styles.data}>Status</span>
            <span className={styles.valueData}>{detailsTvSeries.status}</span>
          </p>
          <p className={styles.info}>
            <span className={styles.data}>Type</span>
            <span className={styles.valueData}>{detailsTvSeries.type}</span>
          </p>
          <p className={styles.info}>
            <span className={styles.data}>Original Language</span>
            <span className={styles.valueData}>
              {getLanguage(detailsTvSeries.original_language, listOfLanguages)}
            </span>
          </p>
        </div>
        <div className={styles.containerInfo}>
          <p className={styles.data}>Network</p>
          <ul className={styles.listNetworks}>
            {detailsTvSeries.networks.map((network) => (
              <li key={network.id} className={styles.itemNetwork}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${network.logo_path}`}
                  alt={`logo nextwork ${network.name}`}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimer(240, 140)
                  )}`}
                  width={80}
                  height={30}
                  title={`logo nextwork ${network.name}`}
                  className={styles.logoNetwork}
                />
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={detailsTvSeries.homepage}
          target="_blank"
          rel="external"
          title="Visit Home Page"
          className={styles.linkHomePage}
        >
          <IconLink className={styles.iconLink} />
        </Link>
      </section>
      <section className={styles.sectionSeasons}>
        <h2 className={`headingM ${styles.subtitle}`}>Seasons</h2>
        <div>
          {detailsTvSeries.seasons.map((season) => {
            const date = new Date(season.air_date);
            const monthTextLong = new Intl.DateTimeFormat("en-US", {
              month: "long",
            }).format(date);
            return (
              <div key={season.id} className={styles.cardSeason}>
                <div>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${season.poster_path}`}
                    alt={`poster season ${season.name}`}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimer(240, 140)
                    )}`}
                    width={130}
                    height={195}
                    title={`poster season ${season.name}`}
                    className={styles.posterSeason}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={`headingS ${styles.nameSeason}`}>
                    {season.name}
                  </h3>
                  <h4 className={`headingXS ${styles.metadatasSeason}`}>
                    {date.getFullYear()} | {season.episode_count} Episodes
                  </h4>
                  <p className={styles.presentation}>
                    {season.name} of {detailsTvSeries.name} premiered on{" "}
                    {monthTextLong} {date.getDate()}, {date.getFullYear()}
                  </p>
                  <p className={styles.overviewSeason}>{season.overview}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <h2>Casts</h2>
        <ul>
          {creditsTvSeries.cast.map((cast) => (
            <li key={cast.id}>
              <div>
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
                  />
                )}
              </div>
              <div>
                <p>{cast.original_name}</p>
                <p>{cast.character}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
