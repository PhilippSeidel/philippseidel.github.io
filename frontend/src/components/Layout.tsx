import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="container d-flex justify-content-center align-items-center p-5">
      <div className="col-10">
          <div className="card">
            <div className="card-body">
              <main className="flex-grow-1 container">{children}</main>
            </div>
          </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
