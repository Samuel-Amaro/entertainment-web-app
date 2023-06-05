import { DataResponseNowPlayingMoviesOrUpcoming, DataResponseMovies, DataResponseTV, DatasDetailsMovie, ResponseCredits, ResponseLanguages, ResponseVideo, ResponseGenres, ResponsePaginationMoviesByGenre, DetailsTvSeries } from "@/types";

async function fetcher<TypeResponse>(url: string, messageError: string) {
  const response = await fetch(url, {
    cache: "no-store",
  });

  if(!response.ok) {
    throw new Error(messageError);
  }

  return response.json() as unknown as TypeResponse;
}

export async function getTrendingMovies() {
 return await fetcher<DataResponseMovies>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}trending/movie/day?api_key=${process.env.KEY_API}&language=en-US`, "Failed to fetch datas by trending movies");
}

export async function getNowPlayingMovies() {
  return await fetcher<DataResponseNowPlayingMoviesOrUpcoming>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/now_playing?api_key=${process.env.KEY_API}&language=en-US&page=1`, "Failed to fetch datas by now playing movies");
}

export async function getPopularMovies() {
  return await fetcher<DataResponseMovies>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/popular?api_key=${process.env.KEY_API}&language=en-US&page=1`, "Failed to fetch datas by popular movies");
}

export async function getTopRatedMovies() {
  return await fetcher<DataResponseMovies>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/top_rated?api_key=${process.env.KEY_API}&language=en-US&page=1`, "Failed to fetch datas by top rated movies");
}

export async function getUpcomingMovies() {
  return await fetcher<DataResponseNowPlayingMoviesOrUpcoming>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/upcoming?api_key=${process.env.KEY_API}&language=en-US&page=1`, "Failed to fetch datas by upcoming movies");
}

export async function getTrendingTv() {
  return await fetcher<DataResponseTV>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}trending/tv/day?api_key=${process.env.KEY_API}&language=en-US`, "Failed to fetch datas by trending tv");
}

export async function getAiringTodayTv() {
  return await fetcher<DataResponseTV>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}tv/airing_today?api_key=${process.env.KEY_API}&language=en-US&page=1`, "Failed to fetch datas by airing today tv");
}

export async function getOnTheAirTv() {
  return await fetcher<DataResponseTV>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}tv/on_the_air?api_key=${process.env.KEY_API}&language=en-US&page=1`, "Failed to fetch datas by on the air tv");
}

export async function getPopularTv() {
  return await fetcher<DataResponseTV>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}tv/popular?api_key=${process.env.KEY_API}&language=en-US&page=1`, "Failed to fetch datas by popular tv");
}

export async function getTopRatedTv() {
  return await fetcher<DataResponseTV>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}tv/top_rated?api_key=${process.env.KEY_API}&language=en-US&page=1`, "Failed to fetch datas by top rated tv");
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

export async function getDetailsTvSeries(id: number) {
  return await fetcher<DetailsTvSeries>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}tv/${id}?api_key=${process.env.KEY_API}&language=en-US`, "Failed to fetch datas by details tv series");
}