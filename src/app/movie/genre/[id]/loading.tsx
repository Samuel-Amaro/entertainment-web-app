import SkeletonPagination from '@/components/Skeletons/Pagination';

export default function Loading() {
	return <SkeletonPagination limitRenderingItems={20} />;
}
