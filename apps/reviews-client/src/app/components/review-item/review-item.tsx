import { Box, Card, CardContent, Rating, Typography } from '@mui/material';
import PersonOutline from '@mui/icons-material/PersonOutline';
import Business from '@mui/icons-material/Business';
import { Review } from '../../types/review-list';
import { formatDate } from '../../utils/helpers';
import StarIcon from '@mui/icons-material/Star';
import { ReactNode } from 'react';

// props
interface ReviewItemProps {
	data: Review;
}

// component
export function ReviewItem({ data }: ReviewItemProps): ReactNode {
	// render jsx
	return (
		<Card key={data.id} sx={{ mb: 2 }} className="review-item">
			<CardContent>
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<div style={{ display: 'flex' }}>
						<Business fontSize="small" sx={{ pr: 0.5 }} />
						<Typography variant="h3">{data.company.name}</Typography>
					</div>
					<Typography variant="body2">{formatDate(data.createdOn)}</Typography>
				</Box>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<PersonOutline sx={{ pr: 0.5, fontSize: 15 }} />
					<Typography variant="body1">{data.user.firstName + ' ' + data.user.lastName}</Typography>
				</Box>
				<Box
					sx={{
						width: 200,
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<Rating
						name="text-feedback"
						value={data.rating}
						readOnly
						precision={0.5}
						size="small"
						emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
					/>
					<Box sx={{ ml: 2 }}>{data.rating}</Box>
				</Box>
				<Typography variant="body2" color="text.secondary">
					{data.reviewText}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default ReviewItem;
