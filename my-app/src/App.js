import React from 'react' ;
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  
  <Router>
     <Navbar />

    <Routes>
      <Route path="/hero" element={<Hero/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
  </Router>
  );
}

export default App;
