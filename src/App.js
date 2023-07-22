import React from 'react';
import Home from './pages/home/HomePage';
import About from './pages/about/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AboutPage' element={<About/>}/>
        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;

