import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => {
	return (
		<nav className={classes.navBar}>
			<ul className={classes.ul}>
				<li className={classes.li}>
					<div className={classes.wrapper}>
						<img
							className={classes.logo}
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEbIOIbjScifPvLGXY2gwa22xCLe780nRyYQ&usqp=CAUß"
							alt=""
						/>
						<Link className={classes.link} to="/home">
							Book Store
						</Link>
					</div>
				</li>
				<li className={classes.li}>
					<Link className={classes.link} to="/category">
						Category
					</Link>
				</li>
				<li className={classes.li}>
					<Link className={classes.link} to="/aboutUs">
						About Us
					</Link>
				</li>
				<li className={classes.li}>
					<Link className={classes.link} to="/contact">
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
