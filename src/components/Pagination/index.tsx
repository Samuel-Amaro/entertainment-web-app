import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import styles from './styles.module.css';

type Props = {
	children: React.ReactNode;
	pageIndex: number;
	currentPage: number;
	totalPages: number;
	hrefPagePrevious: Url;
	hrefPageNext: Url;
};

export default function Pagination({
	children,
	pageIndex,
	currentPage,
	totalPages,
	hrefPagePrevious,
	hrefPageNext
}: Props) {
	return (
		<>
			{children}
			<nav className={styles.nav}>
				{pageIndex > 1 && (
					<Link
						href={hrefPagePrevious}
						rel="next"
						title="Visit page previous"
						className={styles.btnLink}
					>
						Previous
					</Link>
				)}
				<p className={styles.indicator}>
					{currentPage} of {totalPages}
				</p>
				{pageIndex < totalPages && (
					<Link href={hrefPageNext} rel="next" title="Visit page next" className={styles.btnLink}>
						Next
					</Link>
				)}
			</nav>
		</>
	);
}
