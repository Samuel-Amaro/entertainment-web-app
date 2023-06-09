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
