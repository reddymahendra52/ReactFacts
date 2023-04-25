import React from "react";
import "./Main.css"

export default function Main(){
    return(
        <div className="main" >
            <h1 className="titles-main">Fun facts about React</h1>
            <ul className="ul-main">
                <li> Was first released in 2013</li>
                <li> Was originally created by Jordan Walke</li>
                <li> Has well over 100K stars on GitHub</li>
                <li> Is maintained by Facebook</li>
                <li> Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <h1 className="titles-main">Why people love React??</h1>
            <ul className="ul-main">
                <li> It is declarative in nature</li>
                <li> It is composable</li>
                <li> Easy to use</li>
                <li> People love it..</li>
            </ul>
        </div>
    )
}