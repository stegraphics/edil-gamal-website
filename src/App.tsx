import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import Insights from './pages/Insights';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<AboutUs />} />
        <Route path="/progetti" element={<Projects />} />
        <Route path="/contatti" element={<Contacts />} />
        <Route path="/approfondimenti" element={<Insights />} />
      </Routes>
    </Router>
  );
}

export default App;