import React, { useContext , useState} from "react";
import { ThemeContext } from "../Theme";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open , setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevState) => !prevState);  // Correct way to toggle state
  };

  return (
     <>
      <div className={`nav ${theme} d-md-flex d-sm-none`}>
        
        <ul className="navbar-list">
          <li className={theme==='light-theme' ? "nav-link-light" : "nav-link-dark"}><a href="#home" >Home</a></li>
          <li className={theme==='light-theme' ? "nav-link-light" : "nav-link-dark"}><a href="#about" >About</a></li>
          <li className={theme==='light-theme' ? "nav-link-light" : "nav-link-dark"}><a href="#skills" >Skills</a></li>
          <li className={theme==='light-theme' ? "nav-link-light" : "nav-link-dark"}><a href="#projects" >Projects</a></li>
          <li><div >
          <button className="header-toggle-buttons" onClick={toggleTheme}>
            <i className={theme==='light-theme' ? "bi bi-brightness-high" : "bi bi-moon-fill"} ></i>

          </button>
        </div></li>
        </ul>
      </div >

      <div className={`d-flex justify-content-between d-md-none position-fixed top-0 width-100vw nav ${theme}`} >
        {open ? 
        <div className={open ? `d-block ${theme}`:"d-none" }>
        <ul className="list-unstyled">
          <li><i className="bi bi-x  fs-2 border-dark p-2 cursor-pointer" style={{cursor:"pointer"}} onClick={handleToggle}></i> </li>
          <li className="p-2 nav-link-sm "><a href="#home" >Home</a></li>
          <li className="p-2 nav-link-sm"><a href="#about" >About</a></li>
          <li className="p-2 nav-link-sm"><a href="#skills" >Skills</a></li>
          <li className="p-2 nav-link-sm"><a href="#projects" >Projects</a></li>
        </ul>
        </div> :
        <i className="bi bi-list cursor-pointer  fs-2 border-dark p-2 " style={{cursor:"pointer"}} onClick={handleToggle}></i>}
        
        <div >
          <button className="header-toggle-buttons p-3" onClick={toggleTheme}>
            <i className={theme==='light-theme' ? "bi bi-brightness-high" : "bi bi-moon-fill"} ></i>
          </button>
        </div>
      </div>
      </>
  );
}

export default Navbar;