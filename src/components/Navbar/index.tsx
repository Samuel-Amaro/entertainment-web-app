"use client";

import Image from "next/image";
import Link from "next/link";
import IconNavHome from "../Icons/IconNavHome";
import IconNavMovies from "../Icons/IconNavMovies";
import IconNavTvSeries from "../Icons/IconNavTvseries";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import { Url } from "next/dist/shared/lib/router/router";
import MenuButton from "../MenuButton";
import { parseUrl } from "next/dist/shared/lib/router/utils/parse-url";
import { getURL } from "next/dist/shared/lib/utils";

/*type NamesPagNav = "home" | "movies" | "tvseries";

type DataLinkNav = {
  href: string;
  name: NamesPagNav;
  title: string;
};

const navLinks: DataLinkNav[] = [
  {
    href: "/",
    name: "home",
    title: "Home",
  },
  {
    href: "/movie",
    name: "movies",
    title: "Movies",
  },
  {
    href: "/tv",
    name: "tvseries",
    title: "Tv Series",
  },
];
*/

const navLinksMovies: { label: string; url: Url; hrefText: string }[] = [
  {
    label: "Movies Genres",
    url: { pathname: "/movie" },
    hrefText: "/movie",
  },
  {
    label: "Trending Movies",
    url: {
      pathname: "/movie/trending/1",
    },
    hrefText: "/movie/trending/1",
  },
  {
    label: "Now Playing",
    url: {
      pathname: "/movie/list/now-playing",
      query: { page: 1 },
    },
    hrefText: "/movie/list/now-playing?page=1",
  },
  {
    label: "Popular",
    url: {
      pathname: "/movie/list/popular",
      query: { page: 1 },
    },
    hrefText: "/movie/list/popular?page=1",
  },
  {
    label: "Top Rated",
    url: {
      pathname: "/movie/list/top-rated",
      query: { page: 1 },
    },
    hrefText: "/movie/list/top-rated?page=1",
  },
  {
    label: "Upcoming",
    url: {
      pathname: "/movie/list/upcoming",
      query: { page: 1 },
    },
    hrefText: "/movie/list/upcoming?page=1",
  },
];

const navLinksTvSeries: { label: string; url: Url; hrefText: string }[] = [
  {
    label: "Tv Series Genres",
    url: { pathname: "/tv" },
    hrefText: "/tv",
  },
  {
    label: "Trending Tv Series",
    url: {
      pathname: "/tv/trending/1",
    },
    hrefText: "/tv/trending/1",
  },
  {
    label: "Airing Today",
    url: {
      pathname: "/tv/list/airing-today",
      query: { page: 1 },
    },
    hrefText: "/tv/list/airing-today?page=1",
  },
  {
    label: "On The Air",
    url: {
      pathname: "/tv/list/on-the-air",
      query: { page: 1 },
    },
    hrefText: "/tv/list/on-the-air?page=1",
  },
  {
    label: "Popular",
    url: {
      pathname: "/tv/list/popular",
      query: { page: 1 },
    },
    hrefText: "/tv/list/popular?page=1",
  },
  {
    label: "Top Rated",
    url: {
      pathname: "/tv/list/top-rated",
      query: { page: 1 },
    },
    hrefText: "/tv/list/top-rated?page=1",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActiveSegmentMovie = navLinksMovies.find((nav) =>
    pathname.startsWith(nav.hrefText)
  );
  const isActiveSegmentTvSeries = navLinksTvSeries.find((nav) =>
    pathname.startsWith(nav.hrefText)
  );

  return (
    <aside className={styles.navbar}>
      <div>
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={33}
          height={27}
          className={styles.logo}
        />
      </div>
      <nav className={styles.nav}>
        {
          /*<Navigation navLinks={navLinks} />*/
          <>
            <Link
              href="/"
              title="Home"
              target="_self"
              rel="next"
              className={styles.linkWrapper}
            >
              <IconNavHome
                className={
                  isActiveSegmentMovie === undefined &&
                  isActiveSegmentMovie === undefined &&
                  pathname.startsWith("/")
                    ? `${styles.iconNav} ${styles.iconNavActive}`
                    : styles.iconNav
                }
              />
            </Link>
            <MenuButton
              labelButton="Movie"
              menuItems={navLinksMovies}
              classNameMenuButton={styles.menuButtonMovie}
            >
              <IconNavMovies
                className={
                  isActiveSegmentMovie
                    ? `${styles.iconNav} ${styles.iconNavActive}`
                    : styles.iconNav
                }
              />
            </MenuButton>
            <MenuButton
              labelButton="Tv Series"
              menuItems={navLinksTvSeries}
              classNameMenuButton={styles.menuButtonTv}
            >
              <IconNavTvSeries
                className={
                  isActiveSegmentTvSeries
                    ? `${styles.iconNav} ${styles.iconNavActive}`
                    : styles.iconNav
                }
              />
            </MenuButton>
          </>
        }
      </nav>
      <div className={styles.wrapperProfile}>
        <Image
          src="/assets/image-avatar.png"
          alt="Image Profile"
          width={80}
          height={80}
          className={styles.profile}
        />
      </div>
    </aside>
  );
}

/*
function Navigation({
  navLinks,
}: {
  navLinks: {
    href: string;
    name: NamesPagNav;
    title: string;
  }[];
}) {
  const pathname = usePathname();

  return (
    <ul className={styles.list}>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              title={link.title}
              target="_self"
              rel="next"
              className={styles.linkWrapper}
            >
              {getIconNav(link.name, isActive)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function getIconNav(name: NamesPagNav, isActive: boolean) {
  switch (name) {
    case "home":
      return (
        <IconNavHome
          className={
            isActive
              ? `${styles.iconNavActive} ${styles.iconNav}`
              : styles.iconNav
          }
        />
      );
    case "movies":
      return (
        <IconNavMovies
          className={
            isActive
              ? `${styles.iconNavActive} ${styles.iconNav}`
              : styles.iconNav
          }
        />
      );
    case "tvseries":
      return (
        <IconNavTvSeries
          className={
            isActive
              ? `${styles.iconNavActive} ${styles.iconNav}`
              : styles.iconNav
          }
        />
      );
    default:
      break;
  }
}
*/
