import React from 'react';
function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container">
            <a className="navbar-brand" href="/">Philipp Seidel</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
        </nav>
      );
};

export default Header;