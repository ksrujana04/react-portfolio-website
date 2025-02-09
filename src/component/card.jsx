import React from "react";
import PropTypes from "prop-types";

function Card(props){
    return <span className={props.className}>
        <h1>{props.heading}</h1>
        <img src={props.img} alt=""></img>
        <p>{props.para}</p>
    </span>
}

Card.propTypes = {
    className: PropTypes.string,  // className should be a string and is required
    heading: PropTypes.string,    // heading should be a string and is required
    img: PropTypes.string,        // img should be a string (URL)
    para: PropTypes.string,                  // para should be a string, but is optional
  };

Card.defaultProps={
    para:"",
};
export default Card;