import React from 'react';
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={classes.navBar}>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <Link className={classes.link} to="/">Home</Link>
                </li>
                <li className={classes.li}>
                    <Link className={classes.link} to="/category">Category</Link>
                </li>
                <li className={classes.li}>
                    <Link className={classes.link} to="/aboutUs">About Us</Link>
                </li>
                <li className={classes.li}>
                    <Link className={classes.link} to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;