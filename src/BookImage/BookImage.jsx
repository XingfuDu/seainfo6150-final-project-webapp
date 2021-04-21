import React from "react";
import PropTypes from "prop-types";
import classes from "./BookImage.module.css";

const BookImage = (props) => {
  return <img className={classes.image} alt={props.title} src={props.url} />;
};

BookImage.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default BookImage;
