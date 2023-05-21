import Image from "next/image";

export default function Search() {
  return (
    <div>
      <Image
        src="/assets/icon-search.svg"
        alt="Icon search"
        width={32}
        height={32}
      />
      <input
        type="search"
        placeholder="Search for movies or TV series"
        title="Search for movies or TV series"
        name="search"
        aria-label="Search for movies or TV series"
      />
    </div>
  );
}
