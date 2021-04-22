import React from 'react';
import PropTypes from 'prop-types';
import classes from './BookList.module.css';
import BookListItem from '../BookListItem/BookListItem';

const BookList = (props) => {
	let displayContent;

	if (props.books.length) {
		displayContent = (
			<div>
				<div className={classes.readingChallengeBanner}>
					<div className={classes.bannerYear} style={{"backgroundColor": "#f2e9e4"}}>
						<img
							alt="2021 Reading Challenge"
							className={classes.bookImg}
							src="https://s.gr-assets.com/assets/challenges/yearly/img_RCBook-626ef5100b911207af0c4d84f02df03a.svg"
						/>
						<div className={classes.year}>
							<span>
								2021 READING
								<br />
							</span>
							<span>CHALLENGE</span>
						</div>
					</div>
					<div className={classes.challengeStatsContainer2}>
						<table>
							<tbody>
								<tr>
									<td className={classes.challengeStatItem}>Participants</td>
									<td className={classes.statNumber}>3,711,771</td>
								</tr>
								<tr>
									<td className={classes.challengeStatItem}>Books Pledged</td>
									<td className={classes.statNumber}>181,599,755</td>
								</tr>
								<tr>
									<td className={classes.challengeStatItem}>Avg. Books Pledged</td>
									<td className={classes.statNumber}>47</td>
								</tr>
								<tr>
									<td className={classes.challengeStatItem}>Time Left</td>
									<td className={classes.statNumber}>253 days, 13 hours</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<ul className={classes.container}>
					{props.books.map((book) => <BookListItem book={book} key={book.id} />)}
				</ul>
			</div>
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
