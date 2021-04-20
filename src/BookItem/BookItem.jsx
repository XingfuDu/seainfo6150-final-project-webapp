import React, { useState } from 'react';
import HTMLText from '../HTMLText/HTMLText';
import classes from './BookItem.module.css';
import BookImage from '../BookImage/BookImage';
import Button from '../Button/Button';
import ContactData from '../ContactData/ContactData';
import { Link } from 'react-router-dom';

const BookItem = (props) => {
	const [isFormShowing, setIsFormShowing] = useState(false);

	function onClick() {
	  setIsFormShowing(!isFormShowing);
	}
	return (
		<div className={classes.container}>
			<article className={classes.article}>
				<div className={classes.content}>
					<BookImage url={props.book.image} title={props.book.title} />
					<div className={classes.wrapper}>
						<h3 className={classes.h3}>{props.book.title}</h3>
						<time className={classes.time} dateTime={props.book.timeStamp}>
							{props.book.displayDate}
						</time>
						<p className={classes.p}>
							By {props.book.author} &nbsp;&nbsp; Category:{' '}
							<Link className={classes.link} to={`/${props.book.categoryId}`}>
								{props.book.category}
							</Link>

						</p>
						<Button btnType="Success" clicked={onClick}>
							Buy Now
						</Button>
					</div>
				</div>
				<HTMLText text={props.book.description} />
				{isFormShowing? <ContactData/>: null}
			</article>
		</div>
	);
};

export default BookItem;
