import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Career Compass!</h1>
      <p>This is the homepage of your new application.</p>

      <nav>
        <ul>
          <li><Link to="/resume-checker">Resume Checker</Link></li>
          <li><Link to="/chatbot">Chatbot</Link></li>
          <li><Link to="/careerpath">Careerpath</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;