import IconEye from '../Icons/IconEye';
import styles from './ViewCard.module.css';

export default function ViewCard({ className }: { className?: string }) {
	return (
		<div className={className ? `${styles.hoverPoster} ${className} ` : className}>
			<div className={styles.containerText}>
				<IconEye className={styles.iconView} />
				<span className={styles.textHover}>View</span>
			</div>
		</div>
	);
}
