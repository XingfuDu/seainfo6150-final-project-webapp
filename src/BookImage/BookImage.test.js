import React from 'react';
import BookImage from './BookImage';
import { render } from "@testing-library/react";

describe('BookImage tests', () => {
	it('renders correctly', () => {
		const { container } = render(
			<BookImage
				url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1369453733l/6953508.jpg"
				title="Some We Love, Some We Hate, Some We Eat: Why It's So Hard to Think Straight About Animals"
			/>
		);
		expect(container).toMatchSnapshot();
	});
});
