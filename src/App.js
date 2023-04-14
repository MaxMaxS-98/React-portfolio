// This is the main component of the app
// // this will import react and the components
import React from 'react' ;
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
// this is a functional component that will render the components
function App() {
  return (
  // this is router that will handle the routes
  <Router>
     <Navbar />
     

     
     {/* // this is the Routes component that will handle the routes that link to pages */}
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="*" element={<Hero/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="Skills" element={<Skills/>}/>
      <Route path="*" element={<About />} />
    </Routes>
  </Router>
  );
}
// this will export the App component
export default App;
