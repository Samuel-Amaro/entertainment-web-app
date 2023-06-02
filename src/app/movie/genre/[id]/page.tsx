import PaginationMoviesByGenre from "@/components/PaginationMoviesByGenre";

type Props = {
  params: { id: number };
};

//TODO: ver como implementar paginação e como buscar os dados, via cliente ou servidor?


export default function Page({ params }: Props) {
  return (
    <>
      <h1>Genre id {params.id}</h1>
      <PaginationMoviesByGenre idGenre={params.id}/>
    </>
  );
}
