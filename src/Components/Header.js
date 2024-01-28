import '../App.css';
import '../App.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return(
        <>
        <header className="header">
            <a href="#home" className="logo">Michelle's Portfolio</a>

            <nav className="navbar">
                <NavLink to ="/">Home</NavLink>
                <NavLink to ="projects">Projects</NavLink>
                <NavLink to ="connect">Connect</NavLink>
            </nav>
        </header>
        </>
    );
}