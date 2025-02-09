import React,{useContext} from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa';
import { ThemeContext } from "../Theme.js";


const Timeline = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
      let cls = `timeline-${theme}`;
  return (
    <div>
      <h2 className="timeline-title">Education</h2>
      <VerticalTimeline lineColor={(theme==="dark-theme")?"#B19CD9":"#000"} >
        <VerticalTimelineElement
          className={`vertical-timeline-element ${theme}`}
          date="2020"
          position="left"
          iconStyle={{ visibility:'hidden'}}
          contentArrowStyle={(theme==="dark-theme") ?{ borderRight: "10px solid rgb(0,0,0)" }:{}}
          contentStyle={(theme==="light-theme") ? {
            boxShadow: '5px 7px 19px -1px rgba(0,0,0,0.75)',
            WebkitBoxShadow: '5px 7px 19px -1px rgba(0,0,0,0.75)', 
            MozBoxShadow: '5px 7px 19px -1px rgba(0,0,0,0.75)',
            zIndex:1 
          }: {backgroundColor:"rgb(0,0,0)",
            WebkitBoxShadow: '2px 10px 29px 5px rgba(59,38,59,1)',
            MozBoxShadow: '2px 10px 29px 5px rgba(59,38,59,1)',
            boxShadow: '2px 10px 29px 5px rgba(59,38,59,1)',
          zIndex:1}}
        >
          <h3 className="vertical-timeline-element-title" style={{fontSize:'1.2rem'}}>SSC - Good Samaritan High School</h3>
          <p>Grade : 10.0/10.0</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="2020 - 2022"
          iconStyle={{ visibility:'hidden'}}
          contentArrowStyle={(theme==="dark-theme") ?{ borderRight: "10px solid rgb(0,0,0)" }:{}}
          contentStyle={(theme==="light-theme") ? {
            boxShadow: '5px 7px 19px -1px rgba(0,0,0,0.75)',
            WebkitBoxShadow: '5px 7px 19px -1px rgba(0,0,0,0.75)', 
            MozBoxShadow: '5px 7px 19px -1px rgba(0,0,0,0.75)',
            zIndex:1 
          }: {backgroundColor:"rgb(0,0,0)",
            WebkitBoxShadow: '2px 10px 29px 5px rgba(59,38,59,1)',
            MozBoxShadow: '2px 10px 29px 5px rgba(59,38,59,1)',
            boxShadow: '2px 10px 29px 5px rgba(59,38,59,1)',
          zIndex:1}}
        >
          <h3 className="vertical-timeline-element-title" style={{fontSize:'1.2rem'}}>Intermmediate - Sri Chaitanya Junior College</h3>
          <p>Grade: 988/1000</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="2022 - 2026"
          iconStyle={{ visibility:'hidden'}}
          contentArrowStyle={(theme==="dark-theme") ?{ borderRight: "10px solid rgb(0,0,0)" }:{}}
          contentStyle={(theme==="light-theme") ? {
            boxShadow: '5px 7px 19px -1px rgba(0,0,0,0.75)',
            WebkitBoxShadow: '5px 7px 19px -1px rgba(0,0,0,0.75)', 
            MozBoxShadow: '5px 7px 19px -1px rgba(0,0,0,0.75)',
            zIndex:1 
          }: {backgroundColor:"rgb(0,0,0)",
            WebkitBoxShadow: '2px 10px 29px 5px rgba(59,38,59,1)',
            MozBoxShadow: '2px 10px 29px 5px rgba(59,38,59,1)',
            boxShadow: '2px 10px 29px 5px rgba(59,38,59,1)',
          zIndex:1}}
          
        >
          <h3 className="vertical-timeline-element-title" style={{fontSize:'1.2rem'}}>B.E.(CSE) - Chaitanya Bharathi Institute of Technology</h3>
          <p>Grade: 9.73/10.0</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
