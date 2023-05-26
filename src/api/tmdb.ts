import { DataResponseNowPlayingMoviesOrUpcoming, DataResponseMovies } from "@/types";

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