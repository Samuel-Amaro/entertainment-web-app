import { getOnTheAirTv } from '@/api/tmdb';
import List from '@/components/List';
import Section from '@/components/Section';
import { renderCardTv } from '..';

export default async function SectionOnTheAirTv() {
	const datas = await getOnTheAirTv();

	return (
		<Section
			title="On The Air"
			mediaType="Tv"
			hrefToSeeMore={{
				pathname: '/tv/list/on-the-air',
				query: {
					page: 1
				}
			}}
			type="common"
			description="A list of TV shows that air in the next 7 days."
		>
			<List
				items={datas.results}
				limitRenderingItems={10}
				type="common"
				renderItem={renderCardTv}
				mediaType="tv"
			/>
		</Section>
	);
}
