import Search from '@/components/Search';
import { TypeSearchFor } from '@/types';
import styles from './styles.module.css';
import { Metadata } from 'next';

type Props = {
	params: { from: TypeSearchFor };
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
	return {
		title: `${searchParams['query']} - Entertainment web app`,
		description:
			'entertainment web application, which shows the most popular movies, series and favorite television programs, allowing you to obtain information.',
		keywords: [
			'Movies',
			'Series',
			'TV',
			'entertainment',
			'Genres',
			'Genres Movies',
			'Pagination Movies',
			'Lists Movies',
			'Now Playing Movies',
			'Popular Movies',
			'Top Rated Movies',
			'Upcoming Movies',
			'Search Movies',
			'Search TV Series',
			'Multiple Search'
		],
		icons: {
			icon: '/assets/logo.svg',
			shortcut: '/assets/logo.svg',
			apple: '/assets/logo.svg'
		},
		openGraph: {
			title: `${searchParams['query']} - Entertainment web app`,
			description:
				'entertainment web application, which shows the most popular movies, series and favorite television programs, allowing you to obtain information.',
			url: `/search/${params.from}?query=${searchParams['query']}&page=${
				searchParams['page'] &&
				typeof searchParams['page'] === 'string' &&
				!isNaN(Number(searchParams['page']))
					? Number(searchParams['page'])
					: 1
			}`,
			type: 'video.movie',
			siteName: 'Entertainment web app'
		}
	};
}

export default function Page({ params, searchParams }: Props) {
	const query =
		searchParams['query'] && typeof searchParams['query'] === 'string' ? searchParams['query'] : '';
	let pageIndex =
		searchParams['page'] && typeof searchParams['page'] === 'string'
			? Number(searchParams['page'])
			: 1;
	if (
		typeof pageIndex !== 'number' ||
		pageIndex <= 0 ||
		pageIndex >= 500 ||
		isNaN(pageIndex)
		//http 422 page must be less than or equal to 500
	) {
		pageIndex = 1;
	}

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1 className={`headingL ${styles.title}`}>{query}</h1>
			</header>
			<main className={styles.wrapperList}>
				<Search searchFor={params.from} query={query} pageIndex={pageIndex} />
			</main>
		</div>
	);
}
