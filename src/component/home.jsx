import React from "react";
//import black from "../assets/images/black.jpg";
import profile from '../assets/images/profile.jpeg';
//import { ThemeContext } from "../Theme";

function Home() {
    //const { theme} = useContext(ThemeContext);
    //let cls = `home-${theme}`;
    return <div className="home-main d-md-flex d-sm-block w-75 h-lg-100vh" id="home">
        <div className=" home-heading ">
            <b >Srujana</b><br></br>
            <b>Kovuri</b>
            <div className='soc-icons mx-sm-auto'>
                <a href="https://www.linkedin.com/in/kovuri-srujana/" className="soc-icon"><i className="bi bi-linkedin" ></i></a>
                <a href="https://github.com/ksrujana04" className="soc-icon"><i className="bi bi-github theme" ></i></a>
                <a href="mailto:srujana4619@gmail.com" className="soc-icon"><i className="bi bi-envelope-fill"></i></a></div>
        </div>
            <img src={profile} alt="Kovuri Srujana" className="home-photo img-fluid"></img>
        
    </div>
}
export default Home;