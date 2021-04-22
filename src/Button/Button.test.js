import React from 'react';
import Button from './Button';
import { render } from "@testing-library/react";

describe('Button tests', () => {
    function onClick() {
	}
	it('renders correctly', () => {
		const { container } = render(<Button btnType="Success" clicked={onClick}></Button>);
		expect(container).toMatchSnapshot();
	});
});
