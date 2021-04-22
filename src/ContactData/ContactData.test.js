import React from 'react';
import ContactData from './ContactData';
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

describe('ContactData tests', () => {
	const bookState = {
		Book: "Some We Love, Some We Hate, Some We Eat: Why It's So Hard to Think Straight About Animals",
		Quantity: 1,
		TotalPrice: '12.99$'
	};
	it('renders correctly', () => {
		const { container } = render(<BrowserRouter><ContactData book={bookState} /></BrowserRouter>);
		expect(container).toMatchSnapshot();
	});
});
