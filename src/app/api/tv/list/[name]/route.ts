import { getAiringTodayTv, getOnTheAirTv, getPopularTv } from '@/api/tmdb';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { name: string } }) {
	const { searchParams } = new URL(request.url);
	let pageIndex = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
	if (typeof pageIndex !== 'number' || pageIndex <= 0 || pageIndex >= 500 || isNaN(pageIndex)) {
		pageIndex = 1;
	}

	switch (params.name) {
		case 'airing-today': {
			const datasPaginationListAiringToday = await getAiringTodayTv(pageIndex);
			return NextResponse.json(datasPaginationListAiringToday);
		}
		case 'on-the-air': {
			const datasPaginationListOnTheAir = await getOnTheAirTv(pageIndex);
			return NextResponse.json(datasPaginationListOnTheAir);
		}
		case 'popular': {
			const datasPaginationListPopular = await getPopularTv(pageIndex);
			return NextResponse.json(datasPaginationListPopular);
		}
		case 'top-rated': {
			const datasPaginationListPopular = await getPopularTv(pageIndex);
			return NextResponse.json(datasPaginationListPopular);
		}
		default: {
			const datasPaginationListPopular = await getPopularTv(pageIndex);
			return NextResponse.json(datasPaginationListPopular);
		}
	}
}
