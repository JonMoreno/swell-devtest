import { Box, Typography, CircularProgress, Pagination } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ReviewItem from '../review-item/review-item';
import { Review } from '../../types/review-list';
import { ChangeEvent, ReactNode, useEffect, useState } from 'react';

// child component
const LoadingContent = (): ReactNode => {
	return (
		<Box
			sx={{
				display: 'flex',
				minHeight: '100vh',
				alignItems: 'center',
				flexDirection: 'column',
				justifyContent: 'center',
			}}
		>
			<CircularProgress size={100} />
			<Typography sx={{ mt: 2, mb: 20 }}>Loading content...</Typography>
		</Box>
	);
};

// child component
const ContentNotFound = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				minHeight: '100vh',
				alignItems: 'center',
				flexDirection: 'column',
				justifyContent: 'center',
			}}
		>
			<InfoOutlinedIcon sx={{ fontSize: 100 }} color="primary" />
			<Typography sx={{ mt: 2, mb: 20 }}>No reviews found...</Typography>
		</Box>
	);
};

// props
export interface ReviewsHeaderProps {
	total: number;
}
// child component
const ReviewsHeader = ({ total }: ReviewsHeaderProps): ReactNode => {
	const styling = {
		mb: 1,
		mr: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
	};

	return (
		<Box sx={styling}>
			<Typography variant="h2">Total: {total}</Typography>
		</Box>
	);
};

// props
export interface ReviewsListProps {
	loading: boolean;
	items: Review[];
}

// component
export function ReviewsList({ loading, items }: ReviewsListProps): ReactNode {
	// state
	const itemsPerPage = 10;
	const [page, setPage] = useState<number>(1);
	const totalPages = Math.ceil(items.length / 10);
	const [displayedItems, setDisplayedItems] = useState<Review[]>([]);

	// effects
	useEffect(() => {
		setDisplayedItems(items.slice((page - 1) * itemsPerPage, page * itemsPerPage));
	}, [items]);

	// methods
	const handlePageChange = (event: ChangeEvent<unknown>, value: number): void => {
		setPage(value);
		setDisplayedItems(items.slice((value - 1) * itemsPerPage, value * itemsPerPage));
	};

	// render jsx
	return (
		<Box sx={{ py: 2, px: 3, backgroundColor: '#fdf5f5', minHeight: '100vh' }}>
			{loading ? (
				<LoadingContent />
			) : displayedItems.length === 0 ? (
				<ContentNotFound />
			) : (
				<>
					<ReviewsHeader total={items.length} />
					{displayedItems.map((item: Review, index: number) => {
						return <ReviewItem data={item} key={index} />;
					})}
					<Pagination count={totalPages} page={page} onChange={handlePageChange} />
				</>
			)}
		</Box>
	);
}

export default ReviewsList;
