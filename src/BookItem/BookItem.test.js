import React from 'react';
import BookItem from './BookItem';
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

describe('BookItem tests', () => {
    const book = {
        "id": "0",
        "categoryId": "1",
        "category": "Psychology",
        "title": "Some We Love, Some We Hate, Some We Eat: Why It's So Hard to Think Straight About Animals",
        "author": "Hal Herzog",
        "description": "<p>Combining the intellect of Malcolm Gladwell with the irreverent humor of Mary Roach and the paradigm-shifting analysis of Jared Diamond, a leading social scientist offers an unprecedented look inside our complex and often paradoxical relationships with animals.</p><p>Does living with a pet really make people happier and healthier? What can we learn from biomedical research with mice? Who enjoyed a better quality of life—the chicken on a dinner plate or the rooster who died in a Saturday-night cockfight? Why is it wrong to eat the family dog? Drawing on more than two decades of research in the emerging field of anthrozoology, the science of human–animal relations, Hal Herzog offers surprising answers to these and other questions related to the moral conundrums we face day in and day out regarding the creatures with whom we share our world.</p><p>Some We Love, Some We Hate, Some We Eat is a highly entertaining and illuminating journey through the full spectrum of human–animal relations, based on Dr. Herzog’s groundbreaking research on animal rights activists, cockfighters, professional dog-show handlers, veterinary students, and biomedical researchers. Blending anthropology, behavioral economics, evolutionary psychology, and philosophy, Herzog carefully crafts a seamless narrative enriched with real-life anecdotes, scientific research, and his own sense of moral ambivalence.</p><p>Alternately poignant, challenging, and laugh-out-loud funny, this enlightening and provocative book will forever change the way we look at our relationships with other creatures and, ultimately, how we see ourselves.",
        "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1369453733l/6953508.jpg",
        "price": "12.99",
        "timeStamp": "2018-11-22T17:55:57.000Z",
        "displayDate": "November 22nd 2018, 9:55 am"
    };
	it('renders correctly', () => {
		const { container } = render(
			<BrowserRouter><BookItem book={book}/></BrowserRouter>
		);
		expect(container).toMatchSnapshot();
	});
});
