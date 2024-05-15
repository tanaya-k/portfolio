import React from "react";
import "./project.css";

export default function Project({title, description, skills}) {
    return (
            <div className="project info">
                <h2><i>{title}</i></h2>
                {/* Change to skills display */}
                <p className="project description">{description}</p>
                <ul>
                    {skills.map((skill, id) => {return (<li>{skill}</li>)})}
                </ul>
            </div>
            )
}