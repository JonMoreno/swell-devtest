import { faker } from '@faker-js/faker';
import { Review, Company, User } from '../types/review-list';

// helper functions to generate mock data.

export const mockUser = (howMany = 1): User[] => {
	const users: User[] = [];
	for (let i = 1; i <= howMany; i++) {
		const user: User = {
			id: faker.string.uuid(),
			firstName: faker.person.firstName(),
			lastName: faker.image.avatar(),
			email: faker.internet.email(),
		};
		users.push(user);
	}
	return users;
};

export const mockCompany = (howMany = 1): Company[] => {
	const companies: Company[] = [];
	for (let i = 1; i <= howMany; i++) {
		const company: Company = {
			id: faker.string.uuid(),
			name: faker.company.name(),
		};
		companies.push(company);
	}
	return companies;
};

export const mockReviews = (howMany = 1): Review[] => {
	const reviews: Review[] = [];
	for (let i = 1; i <= howMany; i++) {
		const company = mockCompany(1)[0];
		const user = mockUser(1)[0];

		const review: Review = {
			id: faker.string.uuid(),
			reviewText: faker.lorem.paragraph(),
			rating: faker.number.int({ min: 0, max: 5 }),
			createdOn: String(faker.date.past()),
			// relations.
			company,
			companyId: company.id,
			user,
			reviewerId: user.id,
		};
		reviews.push(review);
	}

	return reviews;
};
