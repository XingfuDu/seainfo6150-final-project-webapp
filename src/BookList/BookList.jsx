import React from 'react';
import PropTypes from 'prop-types';
import classes from './BookList.module.css';
import BookListItem from '../BookListItem/BookListItem';

const BookList = (props) => {
	let displayContent;

	if (props.books.length) {
		displayContent = (
			<ul className={classes.container}>
				{props.books.map((book) => <BookListItem book={book} key={book.id} />)}
			</ul>
		);
	} else {
		displayContent = <div className={classes.noData}>You have no data!</div>;
	}

	return displayContent;
};

BookList.propTypes = {
	books: PropTypes.array.isRequired
};
export default BookList;