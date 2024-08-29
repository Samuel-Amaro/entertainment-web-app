'use client';

import styles from './error.module.css';

import Link from 'next/link';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<p className={styles.warning}>There was a problem</p>
				<h1 className={`headingL ${styles.message}`}>{error.message || 'Something went wrong'}</h1>
				<p className={styles.information}>
					Please try again later or contact support if the problem persists.
				</p>
				<div className={styles.containerButton}>
					<button
						type="button"
						title="Try again"
						aria-label="Try again"
						onClick={() => reset()}
						onKeyDown={(e) => {
							if (e.key === 'Enter' || e.key === '') reset();
						}}
						className={styles.btnReset}
					>
						Try again
					</button>
					<Link
						href="/"
						rel="next"
						title="Back Home"
						aria-label="Back Home"
						className={styles.link}
					>
						Back Home
					</Link>
				</div>
			</div>
		</main>
	);
}
