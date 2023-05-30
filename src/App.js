import React from 'react';
import './App.css';
import Navbar from './navbar';
import Hero from './hero';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Footer/>
    </div>
  );
}

export default App;