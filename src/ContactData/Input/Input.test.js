import React from 'react';
import Input from './Input';
import { render } from "@testing-library/react";

describe('Input tests', () => {
	it('renders correctly', () => {
		const { container } = render(<Input label="test" labelContent="test"/>);
		expect(container).toMatchSnapshot();
	});
});
