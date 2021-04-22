import React from 'react';
import OrderConfirmation from './OrderConfirmation';
import { render } from "@testing-library/react";

describe('OrderConfirmation tests', () => {
	const location = {
		search : "Book=Remember%3A%20The%20Science%20of%20Memory%20and%20the%20Art%20of%20Forgetting&Quantity=1&TotalPrice=13.52%24&Name=Xingfu%20Du&Street=3100%20Lake%20Brook%20Boulevard&State=TN&ZipCode=37909&Email=xdu5%40vols.utk.edu&DeliveryMethod=fastest&ReceiveEmails="
	}
	it('renders correctly', () => {
		const { container } = render(<OrderConfirmation location={location} />);
		expect(container).toMatchSnapshot();
	});
});
