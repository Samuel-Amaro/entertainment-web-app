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

const navLinksMovies: { label: string; url: Url; hrefText: string }[] = [
  {
    label: "Genres",
    url: { pathname: "/movie" },
    hrefText: "/movie",
  },
  {
    label: "Trending",
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
    label: "Genres",
    url: { pathname: "/tv" },
    hrefText: "/tv",
  },
  {
    label: "Trending",
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