import { Language, ResponseLanguages, Video } from "./types";

export function shimer(w: number, h: number) {
  return `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <linearGradient id="g">
                <stop stop-color="#333" offset="20%" />
                <stop stop-color="#222" offset="50%" />
                <stop stop-color="#333" offset="70%" />
            </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="#333" />
        <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
        <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;
}

export function toBase64(str: string) {
  return typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
}

export function convertMinutesInHours(minutes: number) {
  const hou = minutes / 60;
  const min = minutes % 60;
  const txtHour = `${Math.trunc(hou)}`.slice(-2);
  const txtMinutes = `${min}`.slice(-2);
  return `${txtHour}h ${txtMinutes}m`;
}

export function formatNumber(n: number) {
  return new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: "USD",
  }).format(n);
}

export function getLanguage(tagLanguage: string, listLanguages: ResponseLanguages) {
  const l = listLanguages.find((language: Language) =>
    language.iso_639_1 === tagLanguage
  );
  if(l)
    return l.english_name;
  return "Unspecified language";
} 

export function getVideoTrailer(listOfVideos: Video[]) {
  const trailer = listOfVideos.find((video: Video) => video.site === "YouTube" && video.type === "Trailer" && video.official === true && video.key);
  if(trailer) 
    return trailer;
  return null;
}

export function getIndexNextPage(indexPage: number) {
  return indexPage + 1;
}

export function getIndexPreviousPage(indexPage: number) {
  return indexPage - 1;
}

/**
 * esta function encontrar elementos que podem receber foco dentro de um elemento pai certificando-se de excluir qualquer coisa com tabindex=-1. Também classificamos os elementos para seguir a ordem
 * 
 * https://zellwk.com/blog/keyboard-focusable-elements/
 * 
 * @param parent 
 * @returns 
 */
export function getFocusableElements(parent?: HTMLElement | null) : HTMLElement[] {
    if (!parent) return [];

  return (
    Array.from(parent.querySelectorAll("a[href], button, input, textarea, select, details,[tabindex]"))
      .filter(
        (el) => el.getAttribute("tabindex") !== "-1" && !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
      )
      // sort tabindexes as follows: 1, 2, 3, 4, ..., 0, 0, 0
      .sort((a, b) => {
        const aIndex = Number(a.getAttribute("tabindex")) ?? 0;
        const bIndex = Number(b.getAttribute("tabindex")) ?? 0;
        if (aIndex === bIndex) return 0;
        if (aIndex === 0) return 1;
        if (bIndex === 0) return -1;
        return aIndex < bIndex ? -1 : 1;
      }) as HTMLElement[]
  );
}

/**
 * esta function percorre um determinado array de elementos que podem receber focus
 * 
 * https://blog.bitsrc.io/simple-accessible-modal-in-react-typescript-and-tailwind-3296704a985a
 * 
 * @param elements 
 * @param forward 
 */
export function nextFocusable(elements: HTMLElement[], forward = true) {
  const currentIndex = elements.findIndex((e) => e === document.activeElement);
  let nextIndex = 0;

  if (currentIndex > -1) {
    if (forward) {
      nextIndex = currentIndex < elements.length - 1 ? currentIndex + 1 : 0;
    } else {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : elements.length - 1;
    }
  }

  elements[nextIndex]?.focus();
}

export function getCertificationMovie(
  results: {
    iso_3166_1: string;
    release_dates: {
      certification: string;
      descriptors: string[];
      iso_639_1: string;
      note: string;
      release_date: string;
      type: number;
    }[];
  }[],
  iso31661: string
) {
  const certificationAndReleaseDate = results.find(
    (result) => result.iso_3166_1 === iso31661
  );
  if (!certificationAndReleaseDate) {
    return null;
  }
  return {
    certification:
      certificationAndReleaseDate.release_dates[
        certificationAndReleaseDate.release_dates.length - 1
      ].certification,
    descriptors:
      certificationAndReleaseDate.release_dates[
        certificationAndReleaseDate.release_dates.length - 1
      ].descriptors.join(", "),
  };
}