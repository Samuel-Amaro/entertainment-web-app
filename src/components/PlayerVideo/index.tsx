'use client';

import { useState, KeyboardEvent, Suspense, useCallback } from 'react';
import IconPlay from '../Icons/IconPlay';
import styles from './styles.module.css';
import ModalVideo from '../ModalVideo';
import Overlay from '../Overlay';
import { Video } from '@/types';

export default function PlayerVideo({ video }: { video: Video | null }) {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = useCallback(() => {
		setIsClicked(!isClicked);
	}, [isClicked]);

	const handleKeydown = useCallback(
		(event: KeyboardEvent<HTMLButtonElement>) => {
			if (event.key === 'Enter' || event.key === '') {
				setIsClicked(!isClicked);
			}
		},
		[isClicked]
	);

	return (
		<>
			<button
				type="button"
				title="Play Trailer"
				aria-label="Play Trailer"
				className={styles.btnPlay}
				onClick={handleClick}
				onKeyDown={handleKeydown}
			>
				<IconPlay className={styles.iconBtnPlay} />
				<span className={styles.textBtn}>Play Trailer</span>
			</button>
			{isClicked && video && (
				<Overlay onHandle={(isOppen: boolean) => setIsClicked(isOppen)}>
					<ModalVideo video={video} />
				</Overlay>
			)}
		</>
	);
}
