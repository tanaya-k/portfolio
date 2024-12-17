// import React from "react";
import './Projects.css';
import { NavBar, Carousel } from "../../components";

const Projects = () => {
    return (
        <div>
            <NavBar />
            <div className="projects container">
                <h1>Projects</h1>
                <Carousel />
            </div>
        </div>
    );
}

export default Projects;