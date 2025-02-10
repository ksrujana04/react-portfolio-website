import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/homepage';
import {HashRouter as Router, Routes,Route} from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
 import React from "react";
// import Home from "./component/home";
// import About from "./component/about";
// import Skills from "./component/skills";
// import Projects from "./component/projects";
// import Preloader from './component/preloader';
// import { ThemeContext } from "./Theme";
// import Navbar from "./component/navbar";
// import Timeline from './component/timeline';
import "./app.css";
function App() {
  //const { theme } = useContext(ThemeContext);
  return (
    <Router>
    
    <Routes>
      <Route path="/scroll/:sectionid" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
      
    
    </Router>
  );
}

export default App;
