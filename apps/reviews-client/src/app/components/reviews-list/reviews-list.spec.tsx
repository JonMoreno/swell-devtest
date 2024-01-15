import { render } from '@testing-library/react';
import ReviewsList from './reviews-list';
import { mockReviews } from '../../utils/test-utils';

describe('ReviewsList', () => {
	it('should render successfully', () => {
		const reviews = mockReviews(5);
		const { baseElement } = render(<ReviewsList items={reviews} loading={false} />);
		expect(baseElement).toBeTruthy();
	});

	it('should render list of reviews', () => {
		const reviews = mockReviews(5);
		const { container } = render(<ReviewsList items={reviews} loading={false} />);
		const reviewItems = container.querySelectorAll('.review-item');
		expect(reviewItems.length).toBe(5);
	});

	it('should display message if no reviews are found', () => {
		const { getByText } = render(<ReviewsList items={[]} loading={false} />);
		expect(getByText('No reviews found...')).toBeTruthy();
	});

	it('should display the review text if provided', () => {
		const reviews = mockReviews(1);
		const { getByText } = render(<ReviewsList items={reviews} loading={false} />);
		expect(getByText(reviews[0].reviewText)).toBeTruthy();
	});
});
