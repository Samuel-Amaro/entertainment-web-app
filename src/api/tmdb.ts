import { DataResponseTredingMovies } from "@/types";

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
