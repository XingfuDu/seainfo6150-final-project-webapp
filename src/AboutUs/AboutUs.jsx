import React from 'react';
import classes from './AboutUs.module.css';

const AboutUs = () => {
	return (
		<div className={classes.wrapper}>
			<article className={classes.article}>
				<h3 className={classes.h3}>Who We Are</h3>
				<p className={classes.p}>
					Book Store is the world’s largest site for readers and book recommendations. Our mission is to help
					people find and share books they love. Book store launched in January 2007.
				</p>
				<h3 className={classes.h3}>A Few Things You Can Do On Book stores</h3>
				<p className={classes.p}>
					See what books your friends are reading. Track the books you're reading, have read, and want to read.
					Check out your personalized book recommendations. Our recommendation engine analyzes 20 billion data
					points to give suggestions tailored to your literary tastes. Find out if a book is a good fit for you
					from our community’s reviews.
				</p>
				<h3 className={classes.h3}>A Message From Our Co-Founder</h3>
				<p className={classes.p}>
					When I was in second grade, I discovered the Hardy Boys series. Ever since, I've loved to read — both
					for fun and to improve my mind. And I'm always looking for the next great book.
				</p>
				<p className={classes.p}>
					One afternoon while I was scanning a friend's bookshelf for ideas, it struck me: when I want to know
					what books to read, I'd rather turn to a friend than any random person or bestseller list.
				</p>
				<p className={classes.p}>
					So I decided to build a website – a place where I could see my friends' bookshelves and learn about what
					they thought of all their books. Elizabeth, my co-founder (and now my wife) wrote the site copy and I
					wrote the code. We started in my living room, motivated by the belief that there was a better way to
					discover and discuss good books, and that we could build it.
				</p>
				<p className={classes.p}>
					Book store is that site. It is a place where you can see what your friends are reading and vice versa.
					You can create "bookshelves" to organize what you've read (or want to read). You can comment on each
					other's reviews. You can find your next favorite book. And on this journey with your friends you can
					explore new territory, gather information, and expand your mind.
				</p>
				<p className={classes.p}>Knowledge is power, and power is best shared among readers.</p>
				<p className={classes.p}>Xingfu Du</p>
				<p className={classes.p}>Co-Founder</p>
			</article>
		</div>
	);
};

export default AboutUs;
