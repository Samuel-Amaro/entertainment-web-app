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

type NamesPagNav = "home" | "movies" | "tvseries";

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

const navLinksMovies: { label: string; url: Url }[] = [
  {
    label: "Movies Genres",
    url: { pathname: "/movie" },
  },
  {
    label: "Trending Movies",
    url: {
      pathname: "/movie/trending/1",
    },
  },
  {
    label: "Now Playing",
    url: {
      pathname: "/movie/list/now-playing",
      query: { page: 1 },
    },
  },
  {
    label: "Popular",
    url: {
      pathname: "/movie/list/popular",
      query: { page: 1 },
    },
  },
  {
    label: "Top Rated",
    url: {
      pathname: "/movie/list/top-rated",
      query: { page: 1 },
    },
  },
  {
    label: "Upcoming",
    url: {
      pathname: "/movie/list/upcoming",
      query: { page: 1 },
    },
  },
];

const navLinksTvSeries: { label: string; url: Url }[] = [
  {
    label: "Tv Series Genres",
    url: { pathname: "/tv" },
  },
  {
    label: "Trending Tv Series",
    url: {
      pathname: "/tv/trending/1",
    },
  },
  {
    label: "Airing Today",
    url: {
      pathname: "/tv/list/airing-today",
      query: { page: 1 },
    },
  },
  {
    label: "On The Air",
    url: {
      pathname: "/tv/list/on-the-air",
      query: { page: 1 },
    },
  },
  {
    label: "Popular",
    url: {
      pathname: "/tv/list/popular",
      query: { page: 1 },
    },
  },
  {
    label: "Top Rated",
    url: {
      pathname: "/tv/list/top-rated",
      query: { page: 1 },
    },
  },
];

export default function Navbar() {
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
      <nav>
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
              <IconNavHome className={`${styles.iconNav}`} />
            </Link>
            <MenuButton labelButton="Movie" menuItems={navLinksMovies} classNameMenuButton={styles.menuButtonMovie}>
              <IconNavMovies className={`${styles.iconNav}`} />
            </MenuButton>
            <MenuButton labelButton="Tv Series" menuItems={navLinksTvSeries} classNameMenuButton={styles.menuButtonTv}>
              <IconNavTvSeries className={`${styles.iconNav}`} />
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
