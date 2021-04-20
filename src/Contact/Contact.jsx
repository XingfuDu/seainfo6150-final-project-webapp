import React from 'react';
import classes from './Contact.module.css';

const Contact = (props) => {
	return (
		<div className={classes.wrapper}>
			<article className={classes.article}>
				<h3 className={classes.h3}>Ask The Group</h3>
				<p className={classes.p}>
					Have a question? Found a bug? Try posting in one of these groups—other users can often answer
					questions faster than we can!
				</p>
				<ul>
					<li>Get started, ask questions, and learn about the site in the Welcome to LibraryThing group.</li>
					<li>Report bugs in the Bug Collectors group.</li>
					<li>Ask, add, and answer questions in the FAQ Group.</li>
					<li>Suggest features on the Recommend Site Improvements group.</li>
				</ul>
				<p className={classes.p}>
					Check out the LibraryThing blog to learn about new features, contests, and to generally stay in the
					know.
				</p>
				<h3 className={classes.h3}>Email us</h3>
				<p className={classes.p}>
					If you have a question about any aspect of LibraryThing, feel free to email one of us. The general
					division of email is below, but if you're not sure who to email, or if your question is about
					something other than the topics listed here, email{' '}
					<a className={classes.a} href="mailto:info@bookstore.com">info@bookstore.com</a>. We'll make sure your message gets to the
					right person.
				</p>
				<h3 className={classes.h3}>
					Info 
				</h3>
                <a className={classes.a} href="mailto:info@bookstore.com">info@bookstore.com</a>
				<p className={classes.p}>
					General questions about LibraryThing.com, bug reports, feature requests, questions about your
					account, settings, or about something you ordered in our Store.
				</p>
				<h3 className={classes.h3}>
					TinyCat 
				</h3> <a className={classes.a} href="mailto:tinycat@bookstore.com">tinycat@bookstore.com</a>
				<p className={classes.p}>
					General questions about TinyCat, questions about your account, settings, or paying for your
					subscription.
				</p>
                <h3 className={classes.h3}>Early Reviewers/Member Giveaways</h3>
                <a className={classes.a} href="mailto:meg@bookstore.com">meg@bookstore.com</a>
                <h3 className={classes.h3}>Send us a letter</h3>
                <p className={classes.p}>Need to send us snail mail? The address is here.</p>
			</article>
		</div>
	);
};

export default Contact;
