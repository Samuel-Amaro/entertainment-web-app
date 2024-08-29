import { searchFromMovie, searchFromTv, searchMulti } from '@/api/tmdb';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { from: string } }) {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get('query') ? (searchParams.get('query') as string) : '';
	let pageIndex = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

	if (typeof pageIndex !== 'number' || pageIndex <= 0 || pageIndex >= 500 || isNaN(pageIndex)) {
		pageIndex = 1;
	}
	switch (params.from) {
		case 'movie': {
			const datasSearchMovies = await searchFromMovie(query, pageIndex);
			return NextResponse.json(datasSearchMovies);
		}
		case 'tv': {
			const datasSearchTvSeries = await searchFromTv(query, pageIndex);
			return NextResponse.json(datasSearchTvSeries);
		}
		case 'multi': {
			const datasSearchMulti = await searchMulti(query, pageIndex);
			return NextResponse.json(datasSearchMulti);
		}
		default:
			const datasSearchMulti = await searchMulti(query, pageIndex);
			return NextResponse.json(datasSearchMulti);
	}
}
