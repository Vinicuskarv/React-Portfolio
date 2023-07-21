import React from 'react';
import NavBar from './components/navbar';
import HomeContainer from './components/home-container';
import ImagemBackground from './background.jpg';

function App() {
  return (
    <div className="App">
      <div style={styles.content}>
        <NavBar />
        <br />
        <HomeContainer/>
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
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default App;

