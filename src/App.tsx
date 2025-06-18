import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Imprint from './pages/Imprint';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Projects from './pages/Projects';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          {/* Add more routes here */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
