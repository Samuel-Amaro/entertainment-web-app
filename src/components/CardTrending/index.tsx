import DatasCard from '../DatasCard';
import styles from './CardMovieTrending.module.css';
import ViewCard from '../ViewCard';

interface PropsCardMovieTrending {
	mediaType: string;
	date: string;
	titleOrName: string;
	posterPath: string;
}

export default function CardMovieTrending({
	mediaType,
	date,
	titleOrName,
	posterPath
}: PropsCardMovieTrending) {
	return (
		<div className={styles.card}>
			<div className={styles.wrapperImage}>
				{posterPath && (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE + posterPath}`}
						alt={`poster ${mediaType} ${titleOrName}`}
						title={`poster ${mediaType} ${titleOrName}`}
						width={240}
						height={140}
						decoding="async"
						className={styles.image}
					/>
				)}
				<ViewCard className={styles.hoverPoster} />
			</div>
			<DatasCard
				mediaType={mediaType}
				date={date}
				titleOrName={titleOrName}
				className={styles.datasCard}
			/>
		</div>
	);
}
