import 'bootstrap/dist/css/bootstrap.min.css';
//import {BrowserRouter, Router, Routes} from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React,{ useContext } from "react";
import Home from "../component/home";
import About from "../component/about";
import Skills from "../component/skills";
import Projects from "../component/projects";
//import Preloader from './component/preloader';
import { ThemeContext } from "../Theme.js";
import Navbar from "../component/navbar";
import Footer from '../component/footer.jsx';
//import "./app.css";

function HomePage() {
  const { theme } = useContext(ThemeContext);
  return (
    
    <div className={theme}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
   
  );
}

export default HomePage;
