import { getTrendingMovies } from '@/api/tmdb';
import styles from './pagetrending.module.css';
import Link from 'next/link';
import { renderCardMovie } from '@/components/SectionMovies';
import List from '@/components/List';
import FormSearch from '@/components/FormSearch';
import { getIndexNextPage, getIndexPreviousPage } from '@/utils';

type Props = {
	params: { page: number };
};

export const metadata = {
	title: 'Trending Movies',
	description:
		'entertainment web application, which shows the most popular movies, series and favorite television programs, allowing you to obtain information.',
	keywords: [
		'Movies',
		'Series',
		'TV',
		'entertainment',
		'Genres',
		'Genres Movies',
		'Trending Movies',
		'Trending'
	],
	icons: {
		icon: '/assets/logo.svg',
		shortcut: '/assets/logo.svg',
		apple: '/assets/logo.svg'
	},
	openGraph: {
		title: 'Trending Movies',
		description:
			'entertainment web application, which shows the most popular movies, series and favorite television programs, allowing you to obtain information.',
		url: '/movie/trending?page=1',
		type: 'video.movie',
		siteName: 'Entertainment web app'
	}
};

export default async function Page({ params }: Props) {
	let pageIndex = 1;

	if (
		params.page &&
		typeof params.page === 'string' &&
		Number(params.page) > 0 &&
		Number(params.page) < 500 //api tmdb return http 422 page must be less than or equal to 500 if page < 0 and > 500
	) {
		pageIndex = Number(params.page);
	}

	const datas = await getTrendingMovies(pageIndex);

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<FormSearch placeholder="Search for movies" searchFor="movie" />
				<h1 className={`headingL ${styles.title}`}>Trending Movies</h1>
			</header>
			<main className={styles.wrapperList} aria-live="polite" aria-atomic="true">
				<List
					items={datas.results}
					limitRenderingItems={20}
					type="common"
					renderItem={renderCardMovie}
				/>
			</main>
			<footer className={styles.containerButtons}>
				{pageIndex > 1 && (
					<Link
						href={`/movie/trending/${getIndexPreviousPage(pageIndex)}`}
						rel="next"
						title="Visit page previous movies"
						className={styles.btnLink}
					>
						Previous
					</Link>
				)}
				<p className={styles.indicator} aria-live="polite" aria-atomic="true">
					{datas.page} of {datas.total_pages}
				</p>
				{pageIndex < datas.total_pages && (
					<Link
						href={`/movie/trending/${getIndexNextPage(pageIndex)}`}
						rel="next"
						title="Visit page next movies"
						className={styles.btnLink}
					>
						Next
					</Link>
				)}
			</footer>
		</div>
	);
}
