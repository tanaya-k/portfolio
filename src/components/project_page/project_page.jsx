import React from "react";
import "./project_page.css";
import Navbar from "../navbar/navbar";

export default function Project_Page() {
    return (
        <div>
            {/* <Navbar/> */}
            <div className="title">
                <h1>Project Name</h1>
                {/* Fix alignment issue - flexboxing title and project tag */}
                <h3>Hackathon Project</h3>
            </div>
            <p>Description of the project</p>
        </div>
    )
}