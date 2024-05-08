import React from "react";
import "./about_me.css";
import Project from "../project/project";

export default function AboutMe() {
    return (
    <div>
        <h1 className="about me">About Me</h1>
        <p>I am a 3rd year student at the University of British Columbia, 
            studying Mathematics and currently enrolled in the Computational Mathematics Science co-op. 
            My technical interests include <b>full stack web development</b>, <b>machine learning
                 research</b> and <b>mathematics</b>.
        </p>
        <div className="projects display">
            <Project title={"Title"} description={"Description of Project"} />
            <Project title={"Title"} description={"Description of Project"} />
            <Project title={"Title"} description={"Description of Project"} />
            <Project title={"Title"} description={"Description of Project"} />
        </div>
    </div>
    )
}