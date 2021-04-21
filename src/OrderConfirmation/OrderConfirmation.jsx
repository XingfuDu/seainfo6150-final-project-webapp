import React from 'react';
import classes from './OrderConfirmation.module.css';

const OrderConfirmation = (props) => {
	const query = new URLSearchParams(props.location.search);
	const form = [];
	for (let param of query.entries()) {
		form.push(param[0]+':  '+param[1]);
	}
	return (
		<div className={classes.wrapper}>
			<article className={classes.article}>
				<h3 className={classes.h3}>Hello,</h3>
				<p className={classes.p}>Thank you for shopping with us! Your order details are indicated below.</p>
                <div className={classes.form}>
                    {form.map(data=><p className={classes.p}>{data}</p>)}
                </div>
			</article>
		</div>
	);
};

export default OrderConfirmation;
