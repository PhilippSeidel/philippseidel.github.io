import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
function Header() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
          <div className="container">
            <a className="navbar-brand" href="/">Philipp Seidel <span className="badge me-1">CS Enjoyer</span></a>
            <div className="d-flex justify-content-center">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink 
                        to="/"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            <i className="bi bi-cup-hot-fill"></i> Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        to="/resume"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            <i className="bi bi-folder2-open"></i> Resume
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        to="/projects"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            <i className="bi bi-rocket-takeoff"></i> Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        to="/blog"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            <i className="bi bi-journal-bookmark-fill"></i> Blog
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        to="/gallery"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            <i className="bi bi-camera"></i> Gallery
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        to="/imprint"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            <i className="bi bi-fingerprint"></i> Imprint
                        </NavLink>
                    </li>
                    </ul>
                </div>
            </div>
          </div>
          <ThemeToggle />
        </nav>
      );
};

export default Header;