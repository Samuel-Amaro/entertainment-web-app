//manipulador de rota para carregar dados de paginação de filmes baseado em listas pré-definidas na api, carrega dados de paginação para listas pré-definidas

import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/api/tmdb";
import { NextResponse } from "next/server";

export async function GET(request: Request, {params}: {params: { name: string }}) {
  const {searchParams} = new URL(request.url);
  let pageIndex = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  if(typeof pageIndex !== "number" || pageIndex <= 0 || pageIndex >= 500 || isNaN(pageIndex)) {
    pageIndex = 1;    
  }
  switch(params.name) {
    case 'now-playing':
      const datasPaginationListNowPlaying = await getNowPlayingMovies(pageIndex); 
      return NextResponse.json(datasPaginationListNowPlaying);
    case 'popular':
      const datasPaginationListPopular = await getPopularMovies(pageIndex);
      return NextResponse.json(datasPaginationListPopular);
    case 'top-rated':
      const datasPaginationListTopRated = await getTopRatedMovies(pageIndex);
      return NextResponse.json(datasPaginationListTopRated);
    case 'upcoming':
      const datasPaginationListUpcoming = await getUpcomingMovies(pageIndex);
      return NextResponse.json(datasPaginationListUpcoming);
    default:
      const datasPaginationListPopularDefault = await getPopularMovies(pageIndex);
      return NextResponse.json(datasPaginationListPopularDefault);
  }
}