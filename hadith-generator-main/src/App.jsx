// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WelcomePage from './pages/WelcomePage';
import HadithComponent from './components/HadithComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/hadith" element={<HadithComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
