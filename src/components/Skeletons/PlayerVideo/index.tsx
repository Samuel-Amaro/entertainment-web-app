import styles from './styles.module.css';

export default function SkeletonPlayerVideo() {
	return (
		<p className={styles.message}>
			<span className={styles.icon}>🌀</span> Loading Trailer Movie...
		</p>
	);
}
