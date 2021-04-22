import React from 'react';
import AboutUs from './AboutUs';
import { render } from "@testing-library/react";

describe('AboutUs tests', () => {
	it('renders correctly', () => {
		const { container } = render(<AboutUs />);
		expect(container).toMatchSnapshot();
	});
});
