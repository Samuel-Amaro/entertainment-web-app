import { TV } from '@/types';
import Card from '../Card';

export function renderCardTv(
	tv: TV,
	typeCard: 'trending' | 'common',
	mediaType?: 'movie' | 'tv' | undefined
) {
	return (
		<Card
			typeCard={typeCard}
			id={tv.id}
			mediaType={mediaType ? mediaType : tv.media_type}
			date={tv.first_air_date}
			titleOrName={tv.name}
			posterPath={tv.poster_path}
		/>
	);
}
