import ProjectCard from "./project-card";
import portfolio from "../assets/images/portfolio.png";
import creditCardFraud from "../assets/images/creditCardFraud.png"
import housingPrice from "../assets/images/housingPrice.png"
import passGen from "../assets/images/passGen.png"
import onlineComp from "../assets/images/onlineComp.png"
import tempcovert from "../assets/images/tempcovert.png"
import React from "react";

function Projects() {
    return <div id="projects" className="p-3">
        <h1>Projects</h1>
        <div className="project-cards container-fluid ">
            <div className="proj-1 d-lg-flex justify-content-around ">
                <ProjectCard title="Portfolio" overlay="Built a Portfolio website using Reactjs. Contains features like toggle theme. Used popular react libraries like react-router-dom, framer-motion, useState hook... " className="project-card col-3 my-4 rounded " img={portfolio}></ProjectCard>
                <ProjectCard title="Online Code Editor" overlay="Built an Online Code Editor using NodeJS. Used Compliex module of nodejs to buid this project. This webpage allows user to write and execute code in different programming languages like c, c++, java and python." className="project-card col-3 my-4 rounded" img={onlineComp}></ProjectCard>
                <ProjectCard title="Password Generator" overlay="Built a password generator using Python. Used random library of python to generate a strong password and tkinter library for the GUI design. This app generates a strong password of length of user choice" className="project-card col-3 my-4 rounded" img={passGen}></ProjectCard>
            </div>
            <div className="proj-2 d-lg-flex justify-content-around">
                <ProjectCard title="Housing Price Prediction" overlay="The Housing Price Prediction project uses a Linear Regression model to predict house prices based on features like location, size, and amenities. The model is trained on a cleaned and preprocessed dataset to provide accurate and reliable predictions, aiding buyers and sellers in making informed decisions." className="project-card col-3 my-4 rounded" img={housingPrice}></ProjectCard>
                <ProjectCard title="Credit Card Fraud Detection" overlay="The Credit Card Fraud Detection project leverages a Decision Tree Classifier to identify fraudulent transactions. It incorporates data preprocessing techniques such as scaling, normalization, and handling class imbalance to ensure accurate and efficient detection." className="project-card col-3 my-4 rounded" img={creditCardFraud}></ProjectCard>
                <ProjectCard title="Temperature Converter" overlay="Built a Temperature Converter Website using HTML, CSS and JavaScript. Implemented a small function which converts the temperature given by user in a certain scale to a desired scale" className="project-card col-3 my-4 rounded" img={tempcovert}></ProjectCard>
            </div>
        </div>
    </div>
}
export default Projects;