// import React from "react";
import { NavBar } from "../../components";
import './AboutMe.css';


// put objective and personal information on one page and move projects to another slide page

// Change this to a function, doesn't make a difference tho
const AboutMe = () => {
    return (
        <div>
            <NavBar/>
            <div className="about container">
                <div className="about description">
                    <h1>About Me</h1>
                    <p className="p desc">I am a fourth year undergraduate student at the University of British Columbia 
                    studying Mathematics, currently enrolled in the Computational Mathematics co-op. 
                    My beautiful college campus in Vancouver, British Columbia is where I currently reside to pursue my degree.
                    My technical interests include <b>fullstack web development</b>, <b>machine learning
                    </b> and <b>mathematics</b>. I love to read research papers and sketch in my free time. 
                    Some interesting facts about me: I am an identical twin, I recently gained an interest in hiking and I am an avid RnB fan.</p>
                </div>
                <div className="about description">
                    <h1>More Info Will Be Added Soon!</h1>
                    {/* <p className="p desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                </div>
                {/* <div className="about project container">
                    <h1>Projects</h1>
                    <Carousel/>
                </div> */}
            </div>
        </div>
    );
}

export default AboutMe;