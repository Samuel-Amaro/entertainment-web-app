import {
  getCreditsMovie,
  getDetailsMovie,
  getListOfLanguages,
  getVideosMovie,
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
import IconLink from "@/components/Icons/IconLink";
import IconPlay from "@/components/Icons/IconPlay";

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

//TODO: adicionar estilizacação a esta page
//TODO: ver se vale a pena componentizar pedaços desta UI, para pedaços menores
//TODO: estilização mobile-first
//TODO: apos estilização criar um skeleton de UI para a loading page
//TODO: adicionar trailer de um movie aqui, obter videos

export default async function Page({ params }: Props) {
  const detailsMovie = await getDetailsMovie(params.id);
  const creditsMovie = await getCreditsMovie(params.id);
  const listOfLanguages = await getListOfLanguages();
  //TODO: podemos realizar essa busca em um componente de servidor e renderizar em um cliete, so precisamos do id para realziar a busca, pode ser feita no modal
  //const listOfVideos = await getVideosMovie(params.id);

  return (
    <main className={styles.main}>
      <section className={styles.sectionSummary}>
        <div className={styles.wrapperImagePoster}>
          {/*//TODO: adicionar o hook de useMediaQuery para ter o tamnho do espaço reservado da image corretamente, ver se consegue tornar a imagem responsiva e mais escalavel sem a prop fill colocando um width, e height inicial e depois alterando com css*/}
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${detailsMovie.poster_path}`}
            alt={`poster movie ${detailsMovie.title}`}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimer(240, 140)
            )}`}
            fill={true}
            className={styles.posterImage}
            title={`poster movie ${detailsMovie.title}`}
          />
        </div>
        <div>
          <h1 className={`headingL ${styles.title}`}>
            <span className={styles.titleText}>{detailsMovie.title}</span>{" "}
            <span className={styles.titleYear}>{`(${new Date(
              detailsMovie.release_date
            ).getFullYear()})`}</span>
          </h1>
          <p className={styles.metadatas}>
            <span className={styles.metadataDate}>
              {detailsMovie.release_date}
            </span>
            <span className={styles.diviser}></span>
            <span className={styles.metadataGenres}></span>
            {detailsMovie.genres.map((genre) => genre.name).join(",")}
            <span className={styles.diviser}></span>
            <span className={styles.metadataRuntime}>
              {convertMinutesInHours(detailsMovie.runtime)}
            </span>
          </p>
          {/*//TODO: criar um modal para abrir um iframe de embed do you tube que seja responsive para reproduzir o trailer do filme, ao clicar fora do modal fechar o player e para de reproduzir ou então ter um buttton para fechar, o modal deve receber o url, id, e dados para buscar video e carregar e reproduzir*/}
          <button
            type="button"
            title="Play Trailer"
            aria-label="Play Trailer"
            className={styles.btnPlay}
          >
            <IconPlay className={styles.iconBtnPlay} />
            <span className={styles.textBtn}>Play Trailer</span>
          </button>
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
              <div className={styles.wrapperProfile}>
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
  );
}
