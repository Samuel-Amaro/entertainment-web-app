import { DataResponseNowPlayingMoviesOrUpcoming, DataResponseMovies, DataResponseTV, DatasDetailsMovie, ResponseCredits, ResponseLanguages, ResponseVideo, ResponseGenres, ResponsePaginationMoviesByGenre, DetailsTvSeries, ResponsePaginationTVSeriesByGenre, DataResponseSearchMulti } from "@/types";

async function fetcher<TypeResponse>(url: string, messageError: string) {
  const response = await fetch(url, {
    cache: "no-store",
  });

  if(!response.ok) {
    throw new Error(messageError);
  }

  return response.json() as unknown as TypeResponse;
}

export async function getTrendingMovies(indexPage: number = 1) {
  let url = `${process.env.NEXT_PUBLIC_ENDPOINT_API}trending/movie/day?api_key=${process.env.KEY_API}&language=en-US`;
  if (typeof indexPage === "number" && indexPage >= 1) {
    url = url + `&page=${indexPage}`;
  }
  return await fetcher<DataResponseMovies>(url, "Failed to fetch datas by trending movies");
}

export async function getNowPlayingMovies(indexPage: number = 1) {
  return await fetcher<DataResponseNowPlayingMoviesOrUpcoming>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/now_playing?api_key=${process.env.KEY_API}&language=en-US&page=${indexPage}`, "Failed to fetch datas by now playing movies");
}

export async function getPopularMovies(indexPage: number = 1) {
  return await fetcher<DataResponseMovies>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/popular?api_key=${process.env.KEY_API}&language=en-US&page=${indexPage}`, "Failed to fetch datas by popular movies");
}

export async function getTopRatedMovies(indexPage: number = 1) {
  return await fetcher<DataResponseMovies>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/top_rated?api_key=${process.env.KEY_API}&language=en-US&page=${indexPage}`, "Failed to fetch datas by top rated movies");
}

export async function getUpcomingMovies(indexPage: number = 1) {
  return await fetcher<DataResponseNowPlayingMoviesOrUpcoming>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/upcoming?api_key=${process.env.KEY_API}&language=en-US&page=${indexPage}`, "Failed to fetch datas by upcoming movies");
}

export async function getTrendingTv(indexPage: number = 1) {
  let url = `${process.env.NEXT_PUBLIC_ENDPOINT_API}trending/tv/day?api_key=${process.env.KEY_API}&language=en-US`;
  if (typeof indexPage === "number" && indexPage >= 1) {
    url = url + `&page=${indexPage}`;
  }
  return await fetcher<DataResponseTV>(url, "Failed to fetch datas by trending tv");
}

export async function getAiringTodayTv(indexPage: number = 1) {
  return await fetcher<DataResponseTV>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}tv/airing_today?api_key=${process.env.KEY_API}&language=en-US&page=${indexPage}`, "Failed to fetch datas by airing today tv");
}

export async function getOnTheAirTv(indexPage: number = 1) {
  return await fetcher<DataResponseTV>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}tv/on_the_air?api_key=${process.env.KEY_API}&language=en-US&page=${indexPage}`, "Failed to fetch datas by on the air tv");
}

export async function getPopularTv(indexPage: number = 1) {
  return await fetcher<DataResponseTV>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}tv/popular?api_key=${process.env.KEY_API}&language=en-US&page=${indexPage}`, "Failed to fetch datas by popular tv");
}

export async function getTopRatedTv(indexPage: number = 1) {
  return await fetcher<DataResponseTV>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}tv/top_rated?api_key=${process.env.KEY_API}&language=en-US&page=${indexPage}`, "Failed to fetch datas by top rated tv");
}

export async function getDetailsMovie(id: number) {
  return await fetcher<DatasDetailsMovie>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/${id}?api_key=${process.env.KEY_API}&language=en-US`, "Failed to fetch datas by details movie");
}

export async function getCreditsMovie(movieId: number) {
  return await fetcher<ResponseCredits>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/${movieId}/credits?api_key=${process.env.KEY_API}&language=en-US`, "Failed to fetch datas by credits movie");
}

export async function getListOfLanguages() {
  return await fetcher<ResponseLanguages>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}configuration/languages?api_key=${process.env.KEY_API}`, "Failed to fetch datas by configuration de languages de tmdb api");
}

export async function getVideosMovie(idMovie: number) {
  return await fetcher<ResponseVideo>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/${idMovie}/videos?api_key=${process.env.KEY_API}&language=en-US`, "Failed to fetch datas by videos to movie from tmdb api");
}

export async function getGenresMovie() {
  return await fetcher<ResponseGenres>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}genre/movie/list?api_key=${process.env.KEY_API}&language=en`, "Failed to fetch datas by genres by movie from tmdb api");
}

export async function getPageMoviesByGenre(idGenre: number, indexPage: number) {
  return await fetcher<ResponsePaginationMoviesByGenre>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}discover/movie?api_key=${process.env.KEY_API}&with_genres=${idGenre}&page=${indexPage}`, "Failed to fetch datas from page by movies from a genre by movie from tmdb api");
}

export async function getDetailsTvSeries(idTvSerie: number) {
  return await fetcher<DetailsTvSeries>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}tv/${idTvSerie}?api_key=${process.env.KEY_API}&language=en-US`, "Failed to fetch datas by details tv series");
}

export async function getCreditsTvSeries(idTvSerie: number) {
  return await fetcher<ResponseCredits>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}tv/${idTvSerie}/credits?api_key=${process.env.KEY_API}&language=en-US`, "Failed to fetch datas by credits tv series");
}

export async function getVideosTvSeries(idTv: number) {
  return await fetcher<ResponseVideo>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}tv/${idTv}/videos?api_key=${process.env.KEY_API}&language=en-US`, "Failed to fetch datas by videos to tv series from tmdb api");
}

export async function getGenresTvSeries() {
  return await fetcher<ResponseGenres>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}genre/tv/list?api_key=${process.env.KEY_API}&language=en`, "Failed to fetch datas by genres by tv series from tmdb api");
}

export async function getPageTvSeriesByGenre(idGenre: number, indexPage: number) {
  return await fetcher<ResponsePaginationTVSeriesByGenre>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}discover/tv?api_key=${process.env.KEY_API}&with_genres=${idGenre}&page=${indexPage}`, "Failed to fetch datas from page by movies from a genre by tv series from tmdb api");
}

export async function searchFromMovie(query: string, indexPage: number) {
  return await fetcher<DataResponseMovies>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}search/movie?api_key=${process.env.KEY_API}&query=${query}&page=${indexPage}`, "Failed to fetch datas from search by movies.");
}

export async function searchFromTv(query: string, indexPage: number) {
  return await fetcher<DataResponseTV>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}search/tv?api_key=${process.env.KEY_API}&query=${query}&page=${indexPage}`, "Failed to fetch datas from search by tv series.");
}

export async function searchMulti(query: string, indexPage: number) {
  return await fetcher<DataResponseSearchMulti>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}search/multi?api_key=${process.env.KEY_API}&query=${query}&page=${indexPage}`, "Failed to fetch datas from search multipla from tv series and movies.");
}
