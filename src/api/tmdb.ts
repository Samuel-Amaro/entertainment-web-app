import { DataResponseNowPlayingMovies, DataResponseTredingMovies } from "@/types";

export async function getTrendingMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_API}trending/movie/day?api_key=${process.env.NEXT_PUBLIC_KEY_API}&language=en-US`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch datas by trending movies");
  }

  return response.json() as unknown as DataResponseTredingMovies;
}

export async function getNowPlayingMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_API}movie/now_playing?api_key=${process.env.NEXT_PUBLIC_KEY_API}&language=en-US&page=1`,{
      cache: "no-store",
    }
  );

  if(!response.ok) {
    throw new Error("Failed to fetch datas by now playing movies");
  }

  return response.json() as unknown as DataResponseNowPlayingMovies;
}

//TODO: criar metodo para buscar filmes na lista de popular