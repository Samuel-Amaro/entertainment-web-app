import { getGenresMovie } from "@/api/tmdb";

export default async function Page() {
  const datas = await getGenresMovie();

  return (
    <ul>
      {datas.genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}
