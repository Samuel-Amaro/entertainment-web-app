import {
  getCreditsMovie,
  getDetailsMovie,
  getListOfLanguages,
} from "@/api/tmdb";
import {
  convertMinutesInHours,
  formatNumber,
  getLanguage,
  shimer,
  toBase64,
} from "@/utils";
import Image from "next/image";
import Link from "next/link";
import styles from "./movie.module.css";
import { Metadata, ResolvingMetadata } from "next";

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

export default async function Page({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const detailsMovie = await getDetailsMovie(params.id);
  const creditsMovie = await getCreditsMovie(params.id);
  const listOfLanguages = await getListOfLanguages();

  return (
    <main>
      <section>
        <div className={styles.wrapperImage}>
          {/*adicionar o hook de useMediaQuery para ter o tamnho do espaço reservado da image corretamente*/}
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${detailsMovie.poster_path}`}
            alt={`poster movie ${detailsMovie.title}`}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimer(240, 140)
            )}`}
            fill={true}
          />
        </div>
        <div>
          <h1>
            <span>{detailsMovie.title}</span>{" "}
            <span>{new Date(detailsMovie.release_date).getFullYear()}</span>
          </h1>
          <div>
            <span>{detailsMovie.release_date}</span>
            <span></span>
            <ul>
              {detailsMovie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <span></span>
            <span>{convertMinutesInHours(detailsMovie.runtime)}</span>
          </div>
          <div>
            <p>{detailsMovie.tagline}</p>
            <h2>Overview</h2>
            <p>{detailsMovie.overview}</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <p>
            <span>Status</span>
            <span>{detailsMovie.status}</span>
          </p>
          <p>
            <span>Original Language</span>
            <span>
              {getLanguage(detailsMovie.original_language, listOfLanguages)}
            </span>
          </p>
          <p>
            <span>Original title</span>
            <span>{detailsMovie.original_title}</span>
          </p>
          <p>
            <span>Budget</span>
            <span>{formatNumber(detailsMovie.budget)}</span>
          </p>
          <p>
            <span>Revenue</span>
            <span>{formatNumber(detailsMovie.revenue)}</span>
          </p>
        </div>
        <Link
          href={detailsMovie.homepage}
          target="_blank"
          rel="external"
          title="Visit Home Page"
        >
          Home Page
        </Link>
      </section>
      <section>
        <h3>Casts</h3>
        <ul>
          {creditsMovie.cast.map((cast) => (
            <li key={cast.id}>
              <div className={styles.wrapperProfile}>
                {cast.profile_path && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${cast.profile_path}`}
                    alt={`profile ${cast.original_name}`}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimer(240, 140)
                    )}`}
                    fill={true}
                  />
                )}
              </div>
              <p>{cast.original_name}</p>
              <p>{cast.character}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
