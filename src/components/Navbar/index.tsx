import Image from "next/image";
import Link from "next/link";
import IconNavHome from "../Icons/IconNavHome";
import IconNavMovies from "../Icons/IconNavMovies";
import IconNavTvSeries from "../Icons/IconNavTvseries";
import IconNavBookmark from "../Icons/IconNavBookmark";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Image src="/assets/logo.svg" alt="logo" width={33} height={27} />
      </div>
      <ul>
        <li>
          <Link href="/" title="Page Home">
            <IconNavHome />
          </Link>
        </li>
        <li>
          <Link href="/movies" title="Page Movies">
            <IconNavMovies />
          </Link>
        </li>
        <li>
          <Link href="/tvseries" title="Page TV Series">
            <IconNavTvSeries />
          </Link>
        </li>
        <li>
          <Link href="/bookmark" title="Page Bookmarked">
            <IconNavBookmark />
          </Link>
        </li>
      </ul>
      <div>
        <Image
          src="/assets/image-avatar.png"
          alt="Image Profile"
          width={80}
          height={80}
        />
      </div>
    </nav>
  );
}
