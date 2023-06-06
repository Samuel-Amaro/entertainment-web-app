import {
  getCreditsTvSeries,
  getDetailsTvSeries,
  getListOfLanguages,
} from "@/api/tmdb";
import IconLink from "@/components/Icons/IconLink";
import { getLanguage, shimer, toBase64 } from "@/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { id: number };
};

//TODO: mostrar seasons
//TODO: mostrar casts
//TODO: metadads da page
//TODO: estilos mobile-first

export default async function Page({ params }: Props) {
  const detailsTvSeries = await getDetailsTvSeries(params.id);
  const listOfLanguages = await getListOfLanguages();
  const creditsTvSeries = await getCreditsTvSeries(params.id);

  return (
    <main>
      <section>
        <div>
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
          />
        </div>
        <div>
          <h1>
            <span>{detailsTvSeries.original_name}</span>
            <span>{`(${new Date(
              detailsTvSeries.first_air_date
            ).getFullYear()})`}</span>
          </h1>
          <p>
            <span>
              {detailsTvSeries.genres.map((genre) => genre.name).join(",")}
            </span>
          </p>
          <div>
            <em>{detailsTvSeries.tagline}</em>
            <h2>Overview</h2>
            <p>{detailsTvSeries.overview}</p>
          </div>
          <ol>
            {detailsTvSeries.created_by.map((people) => (
              <li key={people.id}>
                <span>{people.name}</span>
                <span>Creator</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section>
        <div>
          <p>
            <span>Status</span>
            <span>{detailsTvSeries.status}</span>
          </p>
          <p>
            <span>Type</span>
            <span>{detailsTvSeries.type}</span>
          </p>
          <p>
            <span>Original Language</span>
            <span>
              {getLanguage(detailsTvSeries.original_language, listOfLanguages)}
            </span>
          </p>
        </div>
        <div>
          <p>Network</p>
          <ul>
            {detailsTvSeries.networks.map((network) => (
              <li key={network.id}>
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
        >
          <IconLink />
        </Link>
      </section>
      <section>
        <h2>Seasons</h2>
        {detailsTvSeries.seasons.map((season) => (
          <div key={season.id}>
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
              />
            </div>
            <div>
                <h3>Season {season.season_number}</h3>
                <h4>{}</h4>
            </div>
          </div>
        ))}
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
                <p>{`(${detailsTvSeries.number_of_episodes}) Episodes`}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
