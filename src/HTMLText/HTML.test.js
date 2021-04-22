import React from 'react';
import HTMLText from './HTMLText';
import { render } from "@testing-library/react";

describe('HTMLText tests', () => {
	it('renders correctly', () => {
		const { container } = render(<HTMLText text="text"/>);
		expect(container).toMatchSnapshot();
	});
});
