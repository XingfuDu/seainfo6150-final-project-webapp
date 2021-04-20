import React from 'react';
import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <p className={classes.p}>Conditions of Use</p>
                </li>
                <li className={classes.li}>
                    <p className={classes.p}>Privacy Notice</p>
                </li>
                <li className={classes.li}>
                    <p className={classes.p}>&#169; 1990-2021, Book Store Inc</p>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;