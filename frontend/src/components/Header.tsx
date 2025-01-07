import React from 'react';
import './Header.css';
function Header() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
          <div className="container">
            <a className="navbar-brand" href="/">Philipp Seidel <span className="badge text-bg-secondary">CS Enjoyer</span></a>
            <div className="d-flex justify-content-center">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Imprint</a>
                    </li>
                    </ul>
                </div>
            </div>
          </div>
        </nav>
      );
};

export default Header;