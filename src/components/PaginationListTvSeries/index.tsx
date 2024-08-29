'use client';

import useSWR from 'swr';
import { DataResponseTV } from '@/types';
import SkeletonPagination from '../Skeletons/Pagination';
import { getIndexNextPage, getIndexPreviousPage } from '@/utils';
import Pagination from '../Pagination';
import List from '../List';
import { renderCardTv } from '../SectionTVSeries';

type Props = {
	nameList: string;
	pageIndex: number;
};

async function fetcher(url: string) {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Failed to fetch datas by movies from list movies, datas pagination');
	}

	const datas: Promise<DataResponseTV> = response.json();

	return datas;
}

export default async function PaginationListTvSeries({ nameList, pageIndex }: Props) {
	const { data, error, isLoading } = useSWR(`/api/tv/list/${nameList}?page=${pageIndex}`, fetcher);

	if (isLoading) {
		return <SkeletonPagination limitRenderingItems={20} />;
	}

	if (!data)
		throw new Error(
			'Failed Fetch datas pagination tv series from list tv to pagination, with error: ' +
				error?.message
		);

	return (
		<Pagination
			pageIndex={pageIndex}
			currentPage={data.page}
			totalPages={data.total_pages}
			hrefPagePrevious={{
				pathname: `/tv/list/${nameList}`,
				query: {
					page: getIndexPreviousPage(pageIndex)
				}
			}}
			hrefPageNext={{
				pathname: `/tv/list/${nameList}`,
				query: { page: getIndexNextPage(pageIndex) }
			}}
		>
			<List
				mediaType="tv"
				items={data.results}
				limitRenderingItems={20}
				type="common"
				renderItem={renderCardTv}
			/>
		</Pagination>
	);
}
