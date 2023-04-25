import React from "react";
import logo from "../assets/react.svg"
import "./Navbar.css"

export default function Navbar(){
    return(
        <nav className="nav">
            <img src={logo}  />
            <h1 className="nav-logo">ReactFacts</h1>
            <h2 className="nav-title">Totally cool React facts!!</h2>
        </nav>

    )
}