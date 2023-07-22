import React from 'react';
import Home from './pages/home/HomePage';
import About from './pages/about/AboutPage';
import ImagemBackground from './background.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div style={styles.content}>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/AboutPage' element={<About/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      
      <img src={ImagemBackground} style={styles.ImagemBackground} alt="Image the background" />

    </div>
  );
}
const styles = {
  content: {
    position: 'relative',
    zIndex: 1,
  },
  ImagemBackground: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
};
export default App;

