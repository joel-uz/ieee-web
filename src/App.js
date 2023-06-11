import React from 'react';
import Home from './home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from "./pages/gallery"
import Chapters from './pages/chapters';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={ 
            <Home />} />
          <Route path="/Home" element={ 
            <Home />} />
          <Route path="/gallery" element={ 
            <Gallery />} />
          <Route path="/Chapters" element={ 
            <Chapters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;