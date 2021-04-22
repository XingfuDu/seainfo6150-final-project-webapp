import React from 'react';
import BookList from './BookList';
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

describe('BookList tests', () => {
    const data = {  
        "0": {
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
      },
      "1": {
        "id": "1",
        "categoryId": "1",
        "category": "Psychology",
        "title": "Remember: The Science of Memory and the Art of Forgetting",
        "author": "Lisa Genova",
        "description": "<p>A fascinating exploration of the intricacies of how we remember, why we forget, and what we can do to protect our memories, from the Harvard-trained neuroscientist and bestselling author of Still Alice.</p><p>Have you ever felt a crushing wave of panic when you can't for the life of you remember the name of that actor in the movie you saw last week, or you walk into a room only to forget why you went there in the first place? If you're over forty, you're probably not laughing. You might even be worried that these lapses in memory could be an early sign of Alzheimer's or dementia. In reality, for the vast majority of us, these examples of forgetting are completely normal. Why? Because while memory is amazing, it is far from perfect. Our brains aren't designed to remember every name we hear, plan we make, or day we experience. Just because your memory sometimes fails doesn't mean it's broken or succumbing to disease. Forgetting is actually part of being human.</p><p>In Remember, neuroscientist and acclaimed novelist Lisa Genova delves into how memories are made and how we retrieve them. You'll learn whether forgotten memories are temporarily inaccessible or erased forever and why some memories are built to exist for only a few seconds (like a passcode) while others can last a lifetime (your wedding day). You'll come to appreciate the clear distinction between normal forgetting (where you parked your car) and forgetting due to Alzheimer's (that you own a car). And you'll see how memory is profoundly impacted by meaning, emotion, sleep, stress, and context. Once you understand the language of memory and how it functions, its incredible strengths and maddening weaknesses, its natural vulnerabilities and potential superpowers, you can both vastly improve your ability to remember and feel less rattled when you inevitably forget. You can set educated expectations for your memory, and in doing so, create a better relationship with it. You don't have to fear it anymore. And that can be life-changing.",
        "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598831596l/54895704.jpg",
        "price": "13.52",
        "timeStamp": "2018-11-22T15:12:24.000Z",
        "displayDate": "November 22nd 2018, 7:12 am"
      }
    };
    const books = Object.values(data);
	it('renders correctly', () => {
		const { container } = render(
			<BrowserRouter><BookList books={books}/></BrowserRouter>
		);
		expect(container).toMatchSnapshot();
	});
});
