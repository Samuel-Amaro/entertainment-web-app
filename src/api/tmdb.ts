import { DataResponseNowPlayingMoviesOrUpcoming, DataResponseMovies, DataResponseTV, DatasDetailsMovie, ResponseCredits } from "@/types";

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
  /*const response = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_API}trending/movie/day?api_key=${process.env.NEXT_PUBLIC_KEY_API}&language=en-US`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch datas by trending movies");
  }

  return response.json() as unknown as DataResponseTredingMovies;
  */
 return await fetcher<DataResponseMovies>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}trending/movie/day?api_key=${process.env.NEXT_PUBLIC_KEY_API}&language=en-US`, "Failed to fetch datas by trending movies");
}

export async function getNowPlayingMovies() {
  /*const response = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/now_playing?api_key=${process.env.NEXT_PUBLIC_KEY_API}&language=en-US&page=1`,{
      cache: "no-store",
    }
  );

  if(!response.ok) {
    throw new Error("Failed to fetch datas by now playing movies");
  }

  return response.json() as unknown as DataResponseNowPlayingMovies;
  */
  return await fetcher<DataResponseNowPlayingMoviesOrUpcoming>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/now_playing?api_key=${process.env.NEXT_PUBLIC_KEY_API}&language=en-US&page=1`, "Failed to fetch datas by now playing movies");
}

export async function getPopularMovies() {
  return await fetcher<DataResponseMovies>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/popular?api_key=${process.env.NEXT_PUBLIC_KEY_API}&language=en-US&page=1`, "Failed to fetch datas by popular movies");
}

export async function getTopRatedMovies() {
  return await fetcher<DataResponseMovies>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/top_rated?api_key=${process.env.NEXT_PUBLIC_KEY_API}&language=en-US&page=1`, "Failed to fetch datas by top rated movies");
}

export async function getUpcomingMovies() {
  return await fetcher<DataResponseNowPlayingMoviesOrUpcoming>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/upcoming?api_key=${process.env.NEXT_PUBLIC_KEY_API}&language=en-US&page=1`, "Failed to fetch datas by upcoming movies");
}

export async function getTrendingTv() {
  return await fetcher<DataResponseTV>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}trending/tv/day?api_key=${process.env.NEXT_PUBLIC_KEY_API}&language=en-US`, "Failed to fetch datas by trending tv");
}

export async function getAiringTodayTv() {
  return await fetcher<DataResponseTV>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}tv/airing_today?api_key=${process.env.NEXT_PUBLIC_KEY_API}&language=en-US&page=1`, "Failed to fetch datas by airing today tv");
}

export async function getOnTheAirTv() {
  return await fetcher<DataResponseTV>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}tv/on_the_air?api_key=${process.env.NEXT_PUBLIC_KEY_API}&language=en-US&page=1`, "Failed to fetch datas by on the air tv");
}

export async function getPopularTv() {
  return await fetcher<DataResponseTV>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}tv/popular?api_key=${process.env.NEXT_PUBLIC_KEY_API}&language=en-US&page=1`, "Failed to fetch datas by popular tv");
}

export async function getTopRatedTv() {
  return await fetcher<DataResponseTV>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}tv/top_rated?api_key=${process.env.NEXT_PUBLIC_KEY_API}&language=en-US&page=1`, "Failed to fetch datas by top rated tv");
}

export async function getDetailsMovie(id: number) {
  return await fetcher<DatasDetailsMovie>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/${id}?api_key=${process.env.NEXT_PUBLIC_KEY_API}&language=en-US`, "Failed to fetch datas by details movie");
}

export async function getCreditsMovie(movieId: number) {
  return await fetcher<ResponseCredits>(`${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/${movieId}/credits?api_key=${process.env.NEXT_PUBLIC_KEY_API}&language=en-US`, "Failed to fetch datas by credits movie");
}