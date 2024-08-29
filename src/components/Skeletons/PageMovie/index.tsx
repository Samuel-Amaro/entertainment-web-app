import styles from './styles.module.css';

export default function SkeletonPageMovie() {
	return (
		<div className={styles.main}>
			<div className={styles.sectionSummary}>
				<div className={styles.poster}></div>
				<div>
					<h1 className={styles.title}></h1>
					<p className={styles.metadatas}></p>
					<p className={styles.playerVideo}></p>
					<div>
						<p className={styles.tagline}></p>
						<h2 className={styles.subtitle}></h2>
						<p className={styles.overview}></p>
					</div>
				</div>
			</div>
			<div className={styles.sectionInfo}>
				<div className={styles.containerInfo}>
					<p className={styles.data}></p>
					<p className={styles.data}></p>
					<p className={styles.data}></p>
					<p className={styles.data}></p>
					<p className={styles.data}></p>
					<p className={styles.data}></p>
				</div>
				<p className={styles.link}></p>
			</div>
			<div>
				<h2 className={styles.subtitle}></h2>
				<ul className={styles.list}>
					<li className={styles.card}>
						<div>
							<div className={styles.wrapperProfile}></div>
							<div className={styles.datasCard}>
								<p className={styles.originalName}></p>
								<p className={styles.character}></p>
							</div>
						</div>
					</li>
					<li className={styles.card}>
						<div>
							<div className={styles.wrapperProfile}></div>
							<div className={styles.datasCard}>
								<p className={styles.originalName}></p>
								<p className={styles.character}></p>
							</div>
						</div>
					</li>
					<li className={styles.card}>
						<div>
							<div className={styles.wrapperProfile}></div>
							<div className={styles.datasCard}>
								<p className={styles.originalName}></p>
								<p className={styles.character}></p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
