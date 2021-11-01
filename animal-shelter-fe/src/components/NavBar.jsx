import React from "react"
import { NavLink } from "react-router-dom"

export default function NavBar(){
    return (
    <div>
        <nav>
            <div className="nav-wrapper blue">
                <a href="/" className="brand-logo right">Save Animals</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/animal">Animals</NavLink></li>
                <li><NavLink to="/shelter">Shelters</NavLink></li>
                <li><NavLink to="/animal/new">Add Animal</NavLink></li>
                </ul>
            </div>
        </nav>
    </div>
    )
}