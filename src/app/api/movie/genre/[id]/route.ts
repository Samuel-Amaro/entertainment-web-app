import { getPageMoviesByGenre, getTrendingMovies } from "@/api/tmdb";
import { NextResponse } from "next/server";

type Params = {
  request: Request;
  params: { id: number };
};

//manipulador de rota para carregar dados de paginação de filmes baseado em generos com paramentros de pesquisa

export async function GET(request: Request, {params}: {params: { id: number }}) {
    const {searchParams} = new URL(request.url);
    const pageIndex = searchParams.get("page");
    const nameGenre = searchParams.get("name");
    if(pageIndex && nameGenre && typeof Number(pageIndex) === "number" && Number(pageIndex) > 0 &&
    Number(pageIndex) < 500 && typeof Number(params.id) === "number") { //http 422 page must be less than or equal to 500)
        const datasPagination = await getPageMoviesByGenre(params.id, Number(pageIndex));
        return NextResponse.json({datasPagination: datasPagination, nameGenre: nameGenre});    
    }
    const datasPagination = await getPageMoviesByGenre(params.id, 1);
    return NextResponse.json({datasPagination: datasPagination, nameGenre: nameGenre});    
}