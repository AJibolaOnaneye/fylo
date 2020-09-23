import React from 'react';
import './App.css';
import Navbar from './components /Navbar';
import Home from './components /Home';
import Section1 from './components /Section1';
import Section2 from './components /Section2';
import Footer from './components /Footer';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;
