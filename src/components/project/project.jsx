import React from "react";
import "./project.css";

export default function Project({title, description}) {
    return (
            <div className="project info">
                <h2><i>{title}</i></h2>
                <p className="project description">{description}</p>
            </div>
            )
}