import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <div className="h-section">
            <img src="v.png" width={70} className="logo"/>

            <div className="menu">
                <nav>
                    <ul>
                        <li>
                        <NavLink to="/" 
                                style={({ isActive }) => (isActive ? { color: 'green' } : {color: '#2F4F4F'})}>
                            Home
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/about"
                                style={({ isActive }) => (isActive ? { color: 'green' } : {color: '#2F4F4F'})}>
                            About
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/contact" 
                                style={({ isActive }) => (isActive ? { color: 'green' } : {color: '#2F4F4F'})}>
                            Contact
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/login">
                        <button class="button">Start Breathing</button>
                        </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}