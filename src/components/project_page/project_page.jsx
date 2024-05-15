import React from "react";
import "./project_page.css";
import Navbar from "../navbar/navbar";
import { useLocation } from "react-router-dom";

export default function Project_Page() {
    const location = useLocation()
    const {from} = location.state

    return (
        <div>
            {/* <Navbar/> */}
            <div className="title">
                <h1>{from.title}</h1>
                <h3>{from.tag} Project</h3>
            </div>
            <p>{from.description}</p>
        </div>
    )
}