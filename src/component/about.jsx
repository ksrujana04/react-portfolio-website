import Timeline from "./timeline";
import Card from "./card";
import React from "react";
function About(){
    return <div id="about" className=" d-lg-flex d-sm-block p-3">
        <Card heading="About Me" para="My name is Srujana, and I am a third-year student at Chaitanya Bharathi Institute of Technology, where I am pursuing a Bachelor’s degree in Computer Science Engineering. As a student, I have developed a keen interest in web development, which was further enhanced through a virtual internship I completed with Bharat Intern. During my time there as a web developer intern, I successfully completed two frontend projects. Beyond my academic and professional pursuits, I have a wide range of interests that include drawing, arts and crafts, listening to music, and playing Sudoku. I am passionate about applying my technical skills to real-world problems. This passion has led me to participate in several hackathons, where I have had the opportunity to collaborate with like-minded peers to develop innovative solutions under time constraints. Looking ahead, my primary goal is to secure a position as a software developer in a reputable company where I can continue to grow and make a meaningful contribution. I am eager to work in an environment that encourages innovation, continuous learning, and professional development. In conclusion, I am a dedicated and motivated individual with a strong passion for computer science and web development. I am committed to applying my skills and knowledge to solve real-world problems and contribute to the success of the organization I work for. I am excited about the opportunities that lie ahead and am looking forward to embarking on a rewarding career as a software developer." className="about-para "/>
        <div className="education">
            <Timeline />
        </div>
        {/* <div className="education">
            <h1>Education</h1>
                <div className="ed-part">
                    <p className="line1-ed">Chaitanya Bharathi Institute of Technology</p>
                    <div className="line2-ed">
                    <p>B.E. CSE </p>
                    <p>CGPA: 9.73</p>
                    </div>
                </div>
            
                <div className="ed-part">
                    <p className="line1-ed">Sri Chaitanya Junior Kalashala</p>
                    <div className="line2-ed">
                    <p>MPC</p>
                    <p>Score: 988</p>
                    </div>
                </div>
            
                <div className="ed-part">
                    <p className="line1-ed">Good Samaritan High School</p>
                    <div className="line2-ed">
                    <p>SSC</p>
                    <p>Grade: 10.0</p>
                    </div>
                </div>
            
        </div> */}
    </div>
    
}
export default About;