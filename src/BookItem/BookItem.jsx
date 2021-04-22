import React, { useState } from 'react';
import HTMLText from '../HTMLText/HTMLText';
import classes from './BookItem.module.css';
import BookImage from '../BookImage/BookImage';
import Button from '../Button/Button';
import ContactData from '../ContactData/ContactData';
import { Link } from 'react-router-dom';
import ads900 from '../Image/ads900.jpg';
import ads700 from '../Image/ads700.jpg';
import ads400 from '../Image/ads400.jpg';

const BookItem = (props) => {
	const [ isFormShowing, setIsFormShowing ] = useState(false);
	const [ BookState, setBookState ] = useState({
		Book: props.book.title,
		Quantity: 1,
		TotalPrice: props.book.price + '$'
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
		const TotalPrice = props.book.price * event.target.value;
		setBookState({
			Book: props.book.title,
			Quantity: event.target.value,
			TotalPrice: TotalPrice + '$'
		});
	};
	return (
		<div className={classes.container}>
			<article className={classes.article}>
				<a href="https://www.amazon.com/b?node=23430543011&ref_=apubna_pr_gr_12002_nd_ml_at_2104">
					<img className={classes.ads}
						srcSet={`${ads400} 400px, ${ads700} 700px, ${ads900} 900px`}
						sizes="
								(max-width: 400px) 400px, 
								(max-width: 1000px) 700px, 
								(max-width: 1200px) 900px, 
								900px
							"
						src={ads900}
						alt="ads"
					/>
				</a>
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
								<input
									className={classes.input}
									type="number"
									min="1"
									onChange={QuantityChangedHandler}
								/>
							</p>
						</div>
						<Button btnType="Success" clicked={onClick}>
							Buy Now
						</Button>
					</div>
				</div>
				{isFormShowing ? null : description}
				{isFormShowing ? <ContactData book={BookState} /> : null}
			</article>
		</div>
	);
};

export default BookItem;
