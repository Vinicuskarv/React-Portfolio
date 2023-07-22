import React from 'react';
import NavBar from '../../components/navbar';
import AboutContainer from './ContainerInfoAbout';


function Home() {
  return (
    <div className="App">
        <NavBar/>
        <AboutContainer/>
    </div>
  );
}

export default Home;