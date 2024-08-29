import styles from './styles.module.css';
import { Video } from '@/types';

export default function ModalVideo({ video }: { video: Video }) {
	return (
		<div
			role="dialog"
			id="dialog"
			aria-labelledby="label"
			aria-modal="true"
			className={styles.modal}
		>
			<h1 id="label" className={`headingL ${styles.title}`}>
				Play Trailer
			</h1>
			<div className={styles.containerIframe}>
				<iframe
					className={styles.iframe}
					src={`https://www.youtube.com/embed/${video.key}`}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
}
