import React from 'react';
import classes from './Category.module.css';
import { Link } from 'react-router-dom';

const Category = () => {
	return (
		<div className={classes.wrapper}>
			<main className={classes.main}>
				<ul className={classes.ul}>
					<li className={classes.li}>
						<Link className={classes.link} to={`/book/1`}>
							Psychology
						</Link>
					</li>
					<li className={classes.li}>
						<Link className={classes.link} to={`/book/2`}>
							Philosophy
						</Link>
					</li>
					<li className={classes.li}>
						<Link className={classes.link} to={`/book/3`}>
							Sociology
						</Link>
					</li>
					<li className={classes.li}>
						<Link className={classes.link} to={`/book/4`}>
							Environment
						</Link>
					</li>
					<li className={classes.li}>
						<Link className={classes.link} to={`book/5`}>
							Science
						</Link>
					</li>
					<li className={classes.li}>
						<Link className={classes.link} to={`/book/6`}>
							Anthropology
						</Link>
					</li>
				</ul>
			</main>
		</div>
	);
};

export default Category;
