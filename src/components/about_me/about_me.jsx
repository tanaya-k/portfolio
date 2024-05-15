import React from "react";
import { Link } from "react-router-dom";
import "./about_me.css";
import Project from "../project/project";
import Navbar from "../navbar/navbar";
import projects from "../../../data/projects.json";

export default function AboutMe() {

    return (
    <div>
        {/* <Navbar/> */}
        <h1 className="about me">About Me</h1>
        <p>I am a 3rd year student at the University of British Columbia, 
            studying Mathematics and currently enrolled in the Computational Mathematics Science co-op. 
            My technical interests include <b>full stack web development</b>, <b>machine learning
                 research</b> and <b>mathematics</b>.
        </p>
        <div className="projects display">
            {projects.map((project, id) => {
            return (<Link to={`/project/${project.title}`} state={{from: project}}>
                        <Project title={project.title} description={project.description} skills={project.skills}/>
                    </Link>)})}
        </div>
    </div>
    )
}