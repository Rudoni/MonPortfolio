// App.js
import React from 'react';
import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Presentation />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
