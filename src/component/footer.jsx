import React,{  useEffect, useContext} from 'react';
import {  useParams, Link } from "react-router-dom";
import { ThemeContext } from "../Theme.js";

    


const  Footer = () => {
    const { theme} = useContext(ThemeContext);
    let cls = `footer-${theme}`;
    const {sectionid} = useParams();
    useEffect(()=>{
        if (sectionid){
            const element = document.getElementById(sectionid);
            if (element){
                element.scrollIntoView({behavior:"smooth"});
            }
        }
    },[sectionid]);
  return (
    <div className={`${cls} d-md-flex d-sm-block text-center`} id='footer'>
        <div className={`${cls} footer-heading p-2 `}><h1 style={{color:"white"}} className=''>Portfolio</h1></div>
        <div className="footer-links">
            <ul>
            <li><Link to="/scroll/home" style={{color:"inherit",textDecoration:"none"}} className={`${cls}`}>Home</Link></li>
            <li><Link to="/scroll/about" style={{color:"inherit",textDecoration:"none"}} className={`${cls}`}>About</Link></li>
            <li><Link to="/scroll/skills" style={{color:"inherit",textDecoration:"none"}} className={`${cls}`}>Skills</Link></li>
            <li><Link to="/scroll/projects" style={{color:"inherit",textDecoration:"none"}} className={`${cls}`}>Projects</Link></li>
            </ul>
        </div>
        <div className={`${cls} footer-icons  `}>
            <ul className=' d-md-block'>
        <li><a href="https://www.linkedin.com/in/kovuri-srujana/" className={`${cls} footer-icon mx-2`}><i className="bi bi-linkedin" ></i>  LinkedIn</a></li>
        <li><a href="https://github.com/ksrujana04" className={`${cls} footer-icon mx-2`}><i className="bi bi-github theme" ></i> Github</a></li>
        <li><a href="mailto:srujana4619@gmail.com" className={`${cls} footer-icon mx-2`}><i className="bi bi-envelope-fill"></i> Gmail</a></li>
        </ul>
        </div>
    </div>
  )
}
export default Footer;