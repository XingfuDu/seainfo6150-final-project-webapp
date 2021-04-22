import React from 'react';
import Nav from './Nav';
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

describe('Nav tests', () => {
	it('renders correctly', () => {
		const { container } = render(<BrowserRouter><Nav/></BrowserRouter>);
		expect(container).toMatchSnapshot();
	});
});
