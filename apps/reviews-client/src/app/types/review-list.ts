
export interface Review {
	id: string;
	reviewerId: string;
	companyId: string;
	reviewText: string;
	rating: number;
	createdOn: string;
	company: Company;
	user: User;
}

export interface Company {
	id: string;
	name: string;
}

export interface User {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
}
