import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './BookListItem.module.css';
import BookImage from '../BookImage/BookImage';

const BookListItem = (props) => {
	return (
		<li className={styles.container}>
			<BookImage url={props.book.image} title={props.book.title} />
			<div className={styles.wrapper}>
				<h3>
					<Link className={styles.link} to={`/${props.book.categoryId}/${props.book.id}`}>
						{props.book.title}
					</Link>
				</h3>
				<time className={styles.time} dateTime={props.book.timeStamp}>{props.book.displayDate}</time>
				<p className={styles.author}>By {props.book.author}</p>
			</div>
		</li>
	);
};

BookListItem.propTypes = {
	book: PropTypes.object.isRequired
};
export default BookListItem;
