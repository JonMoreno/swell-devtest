import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import WebFont from 'webfontloader';
import Header from './components/header/header';
import ReviewsList from './components/reviews-list/reviews-list';
import { theme } from './theme';
import { useState, useEffect } from 'react';
import { Review } from './types/review-list';
import axios from 'axios';

WebFont.load({
	google: {
		families: ['Montserrat:500,600,700'],
	},
});

export function App() {
	// state.
	const [loading, setLoading] = useState(true);
	const [reviews, setReviews] = useState<Review[]>([]);

	useEffect(() => {
		getReviews();
	}, []);

	// methods.
	const getReviews = async () => {
		const res = await axios.get('/api/reviews');
		const { reviews = [] } = res.data;
		setReviews(reviews);
		// just to simulate slow network.
		setTimeout(() => setLoading(false), 500);
	};

	// render jsx.
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Container sx={{ mt: 2, typography: 'body1' }}>
				<ReviewsList loading={loading} items={reviews} />
			</Container>
		</ThemeProvider>
	);
}

export default App;
