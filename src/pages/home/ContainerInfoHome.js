import '../../components/master.css';
import './Home.css'
import ContaineIcons from '../../components/contaiIcons';
import astronauta from '../../components/Astronauta.png';
import { Link } from 'react-router-dom';

import DownloadButton from '../../components/downlodcv';

function HomeContainer() {
  return (
    <div className="container" style={styles.containerInfo}>
      <div id='InfoContainer' style={styles.Info}>
        <p>Hello people,</p>
        <h1 style={styles.h1}>I'M VINICIUS<br/>CARVALHO</h1>
        <p>Welcome to my portfolio website</p>
        <Link to='/AboutPage' className="buttonSobreMim" style={styles.ButtonSobreMim}>Learn more about me</Link>
        <DownloadButton/>
        <ContaineIcons/>
      </div>
      <img className='astronauta' src={astronauta} alt="icon from github" />  
    </div>
  );
}
const styles = {
  containerInfo:{
    position: 'relative',
    top: '50px',
    display: 'flex',
    border: '2px solid rgba(255, 255, 255, 0.575)',
    borderRadius: '10px',
    color: 'aliceblue',
    '--bs-gutter-x':'0',
  },
  Info:{
    backgroundColor:' rgba(181, 180, 180, 0.426)',
    padding: '30px',
    fontFamily: "'Lora', serif",
  },
  h1:{
    fontSize: '50px',
  },
  icon: {
    width: '28px',
    margin: '2px',
  },
  ButtonSobreMim:{
    borderRadius: '20px',
    padding: '15px',
    color:' #ffffff',
    border: 'none',
  }
};

export default HomeContainer;