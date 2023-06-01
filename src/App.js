import React from 'react';
import './App.css';
import Navbar from './navbar';
import Hero from './hero';
import Footer from './Footer';
import Whywe from './whyieee';
import FrameScroll from './scrollcard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Whywe/>
      <FrameScroll/>
      <Footer/>
    </div>
  );
}

export default App;