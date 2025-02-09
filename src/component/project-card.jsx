import React from "react";
import PropTypes from "prop-types";

function ProjectCard(props){
    return <span className={props.className}>
        <h1>{props.heading}</h1>
        <img src={props.img} className="img-fluid rounded mx-auto d-block" alt=""></img>
        <h3 className="text-center">{props.title}</h3>
        <p className="proj-text ">{props.overlay}</p>
    </span>
}

ProjectCard.propTypes = {
    className: PropTypes.string,  // className should be a string and is required
    heading: PropTypes.string,    // heading should be a string and is required
    img: PropTypes.string,        // img should be a string (URL) and is required
    title: PropTypes.string,      // title should be a string and is required
    overlay: PropTypes.string,    // overlay should be a string and is required
  };

export default ProjectCard;