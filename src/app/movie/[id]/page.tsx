import { getCreditsMovie, getDetailsMovie } from "@/api/tmdb";
import { convertMinutesInHours, formatNumber, shimer, toBase64 } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import styles from "./movie.module.css";

export default async function Page({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const detailsMovie = await getDetailsMovie(params.id);
  const creditsMovie = await getCreditsMovie(params.id);

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
            <span>{detailsMovie.original_language}</span>
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
