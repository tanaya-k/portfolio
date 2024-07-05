import React from "react";
import { Link } from "react-router-dom";
import "./about_me.css";
import Project_Button from "../project_button/project_button";
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
            {/* Change formatting for JS code below */}
            {projects.map((project, id) => {
            return (<Link key={id} to={`/project/${project.title}`} state={{from: project}}>
                        <ProjectButton title={project.title} description={project.description} skills={project.skills}/>
                    </Link>)})}
        </div>
    </div>
    )
}