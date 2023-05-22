import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import SectionMoviesTreding from "@/components/SectionMoviesTrending";
import { DataResponseTredingMovies } from "@/types";

async function getTrendingMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_API}trending/movie/day?api_key=${process.env.NEXT_PUBLIC_KEY_API}&language=en-US`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch datas by trending movies");
  }

  return response.json() as unknown as DataResponseTredingMovies;
}

export default async function Home() {
  const trendingMovies = await getTrendingMovies();

  return (
    <>
      <main>
        <SectionMoviesTreding trendingMovies={trendingMovies.results} />
      </main>
    </>
  );
}
