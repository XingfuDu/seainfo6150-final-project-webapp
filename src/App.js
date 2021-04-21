import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { isEmpty } from 'lodash';

import AboutUs from './AboutUs/AboutUs';
import BookItem from './BookItem/BookItem';
import Contact from './Contact/Contact';
import Category from './Category/Category';
import Error from './Error/Error';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import BookList from './BookList/BookList';
import OrderConfirmation from './OrderConfirmation/OrderConfirmation';

function App() {
	const [ fetchedData, setFetchedData ] = useState();

	useEffect(
		() => {
			const fetchData = async () => {
				// performs a GET request
				const response = await fetch('https://demo3400436.mockable.io/products');
				const responseJson = await response.json();
				setFetchedData(responseJson);
			};

			if (isEmpty(fetchedData)) {
				fetchData();
			}
		},
		[ fetchedData ]
	);

	return isEmpty(fetchedData) ? null : (
		<div style={{ height: '100%' }}>
			<header>
				<Nav />
			</header>
			<Switch>
				<Route path="/" exact>
					<BookList books={Object.values(fetchedData)} />
				</Route>
				<Route path="/home" exact>
					<BookList books={Object.values(fetchedData)} />
				</Route>
				<Route path="/aboutUs" exact component={AboutUs} />
				<Route path="/contact" exact component={Contact} />
				<Route path="/orderConfirmation" exact component={OrderConfirmation} />
				<Route path="/category" exact component={Category} />
				<Route
					path="/book/:categoryId"
					exact
					render={({ match }) => {
						const categoryId = match.params.categoryId;
						const booksByCategory = Object.values(fetchedData).filter((book) => {
							return book.categoryId === categoryId;
						});
						return fetchedData ? <BookList books={booksByCategory} /> : null;
					}}
				/>
				<Route
					path="/book/:categoryId/:productId"
					exact
					render={({ match }) => {
						return fetchedData ? <BookItem book={fetchedData[match.params.productId]} /> : null;
					}}
				/>
				<Route component={Error} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
