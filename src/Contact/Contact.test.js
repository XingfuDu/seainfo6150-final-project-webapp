import React from 'react';
import Contact from './Contact';
import { render } from "@testing-library/react";

describe('Contact tests', () => {
	it('renders correctly', () => {
		const { container } = render(<Contact/>);
		expect(container).toMatchSnapshot();
	});
});
