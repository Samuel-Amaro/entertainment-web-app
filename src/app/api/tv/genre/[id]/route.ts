import { getPageTvSeriesByGenre } from '@/api/tmdb';
import { NextResponse } from 'next/server';

//manipulador de rota para carregar dados de paginação de tv series baseado em generos com paramentros de pesquisa

export async function GET(request: Request, { params }: { params: { id: number } }) {
	const { searchParams } = new URL(request.url);
	const pageIndex = searchParams.get('page');
	if (
		pageIndex &&
		typeof Number(pageIndex) === 'number' &&
		Number(pageIndex) > 0 &&
		Number(pageIndex) < 500 &&
		typeof Number(params.id) === 'number'
	) {
		//http 422 page must be less than or equal to 500)
		const datasPagination = await getPageTvSeriesByGenre(params.id, Number(pageIndex));
		return NextResponse.json(datasPagination);
	}
	const datasPagination = await getPageTvSeriesByGenre(params.id, 1);
	return NextResponse.json(datasPagination);
}
