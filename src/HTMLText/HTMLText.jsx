import React from "react";
import PropTypes from "prop-types";
import classes from "./HTMLText.module.css";

const HTMLText = (props) => {
  return <div className={classes.description} dangerouslySetInnerHTML={{ __html: props.text }} />;
};

HTMLText.propTypes = {
    text: PropTypes.string.isRequired
}
export default HTMLText;
