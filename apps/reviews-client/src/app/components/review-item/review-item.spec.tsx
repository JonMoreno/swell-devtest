import { render } from '@testing-library/react';
import ReviewItem from './review-item';
import { mockReviews } from '../../utils/test-utils';

describe('ReviewItem', () => {
	it('should render successfully', () => {
		const review = mockReviews(1)[0];
		const { baseElement } = render(<ReviewItem data={review} />);
		expect(baseElement).toBeTruthy();
	});
});
