import '../../components/master.css';
import './Home.css'
import icongithub from '../../components/icons/icons8-github.svg';
import iconlinkedin from '../../components/icons/icons8-linkedin.svg';
import iconwhatsapp from '../../components/icons/icons8-whatsapp.svg';
import astronauta from '../../components/Astronauta.png';

function HomeContainer() {
  return (
    <div className="container" style={styles.containerInfo}>
      <div id='InfoContainer' style={styles.Info}>
        <p>Hello people,</p>
        <h1 style={styles.h1}>I'M VINICIUS<br/>CARVALHO</h1>
        <p>Welcome to my portfolio website</p>
        <a href="/AboutPage"><button className='buttonSobreMim' style={styles.ButtonSobreMim} >Learn more about me</button></a>
        <div className="contaiIcons">
          <a href="https://github.com/Vinicuskarv">
            <img src={icongithub} style={styles.icon} alt="icon from github" />
          </a>
          <a href="https://www.linkedin.com/in/vinicius-carvalho-lucius/">
            <img src={iconlinkedin} style={styles.icon} alt="icon from linkedin" />
          </a>
          <a href="https://wa.me/351914127602">
            <img src={iconwhatsapp} style={styles.icon} alt="icon from whatsapp" />        
          </a>
        </div>
        
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
    backgroundColor:' rgba(181, 180, 180, 0.226)',
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
    margin: '20px 0 30px 0',
    borderRadius: '20px',
    width: '251px',
    height: '50px',
    color:' #ffffff',
    border: 'none',
  }
};

export default HomeContainer;