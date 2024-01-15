import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ReviewsService {
	constructor(private prisma: DatabaseService) {}

	async getReviews() {
		return this.prisma.review.findMany({
			orderBy: {
				createdOn: 'desc',
			},
			include: {
				company: true,
				user: true,
			},
		});
	}

	getReviewsCount() {
		return this.prisma.review.count();
	}
}
