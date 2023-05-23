"use client";

import Image from "next/image";
import Link from "next/link";
import IconNavHome from "../Icons/IconNavHome";
import IconNavMovies from "../Icons/IconNavMovies";
import IconNavTvSeries from "../Icons/IconNavTvseries";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

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
    href: "/movies",
    name: "movies",
    title: "Movies",
  },
  {
    href: "/tvseries",
    name: "tvseries",
    title: "Tv Series",
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
        <Navigation navLinks={navLinks} />
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
