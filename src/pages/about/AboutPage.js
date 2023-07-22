import React from 'react';
import NavBar from '../../components/navbar';
import AboutContainer from './ContainerInfoAbout';
import ImagemBackground from '../../background.jpg';

function Home() {
  return (
    <div className="App">
      <div style={styles.content}>
        <NavBar/>
        <AboutContainer/>
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

export default Home;