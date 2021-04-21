import React from 'react'
import classes from './Error.module.css';

const Error = () => {
	return (
		<div className={classes.wrapper}>
			<article className={classes.article}>
                <h1 className={classes.p}>404 Not Found</h1>
			</article>
		</div>
	);
};

export default Error;
