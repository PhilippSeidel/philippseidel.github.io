import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
function Header() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
          <div className="container">
            <a className="navbar-brand" href="/">Philipp Seidel <span className="badge text-bg-secondary">CS Enjoyer</span></a>
            <div className="d-flex justify-content-center">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink 
                        to="/"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        to="/resume"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Resume
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        to="/projects"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        to="/blog"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Blog
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        to="/imprint"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Imprint
                        </NavLink>
                    </li>
                    </ul>
                </div>
            </div>
          </div>
        </nav>
      );
};

export default Header;