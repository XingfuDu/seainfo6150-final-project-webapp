import React, { useState } from 'react';
import HTMLText from '../HTMLText/HTMLText';
import classes from './BookItem.module.css';
import BookImage from '../BookImage/BookImage';
import Button from '../Button/Button';
import ContactData from '../ContactData/ContactData';
import { Link } from 'react-router-dom';

const BookItem = (props) => {
	const [ isFormShowing, setIsFormShowing ] = useState(false);
	const [QuantityState, setQuantityState] = useState({
		Quantity: 1
	  });

	function onClick() {
		setIsFormShowing(!isFormShowing);
	}

	const description = (
		<div>
			<h3 className={classes.h3}>Overview:</h3>
			<HTMLText className={classes.description} text={props.book.description} />
		</div>
	);
	const QuantityChangedHandler = (event) => {
		setQuantityState( {
			Quantity: event.target.value
		} )
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
							<Link className={classes.link} to={`/book/${props.book.categoryId}`}>
								{props.book.category}
							</Link>
						</p>
						<div className={classes.price}>
							<p className={classes.p}>
								Price: &nbsp; {props.book.price}&#36; &nbsp; Quantity:
								<input className={classes.Input} type="number" min="1" onChange={QuantityChangedHandler} />
							</p>
						</div>
						<Button btnType="Success" clicked={onClick}>
							Buy Now
						</Button>
					</div>
				</div>
				{isFormShowing ? null : description}
				{isFormShowing ? <ContactData book={QuantityState}/> : null}
			</article>
		</div>
	);
};

export default BookItem;
