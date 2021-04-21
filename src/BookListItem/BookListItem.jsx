import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './BookListItem.module.css';
import BookImage from '../BookImage/BookImage';

const BookListItem = (props) => {
	return (
		<li className={classes.container}>
			<BookImage url={props.book.image} title={props.book.title} />
			<div className={classes.wrapper}>
				<h3>
					<Link className={classes.link} to={`/book/${props.book.categoryId}/${props.book.id}`}>
						{props.book.title}
					</Link>
				</h3>
				<time className={classes.time} dateTime={props.book.timeStamp}>
					{props.book.displayDate}
				</time>
				<p className={classes.author}>By {props.book.author}</p>
			</div>
		</li>
	);
};

BookListItem.propTypes = {
	book: PropTypes.object.isRequired
};
export default BookListItem;
