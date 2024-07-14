// WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to Generate a New Random Hadith!</h1>
      <p>This app will help you find inspiring Hadiths to reflect upon.</p>
      <Link to="/hadith">
        <button className="get-started-button">Get Started</button>
      </Link>
    </div>
  );
};

export default WelcomePage;
