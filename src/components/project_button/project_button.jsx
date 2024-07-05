import React from "react";
import "./project_button.css";

export default function Project_Button({title, description, skills}) {
    return (
            <div className="project button info">
                <h2><i>{title}</i></h2>
                {/* Change to skills display */}
                <p className="project button description">{description}</p>
                <ul>
                    {skills.map((skill, id) => {return (<li key={id}>{skill}</li>)})}
                </ul>
            </div>
            )
}