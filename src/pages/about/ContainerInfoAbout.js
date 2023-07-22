import '../../components/master.css';
import './About.css'
import icongithub from '../../components/icons/icons8-github.svg';
import iconlinkedin from '../../components/icons/icons8-linkedin.svg';
import iconwhatsapp from '../../components/icons/icons8-whatsapp.svg';
import iconOn from '../../components/icons/Icon-On.png';
import iconOff from '../../components/icons/Icon-Off.png';
import AstronautaMeditando from '../../components/AstronautaMeditando.png'


function AboutContainer() {
  return (
    <div className="container" style={styles.containerInfo}>
      <div className="container" id='InfoContainer' style={styles.Info}>
        <div className='CampoName'>
            <h1 style={styles.h1}>I'M VINICIUS<br/>CARVALHO</h1>
            <img src={AstronautaMeditando} className='AstronautaMeditando'  alt="Astronauta Meditando" />
        </div>
        <p>Hello! My name is Vinicius Carvalho, I'm 19 years old and I'm a Web Developer. I'm an expert in creation of websites and web applications, using languages ​​such as JavaScript and PHP. With my technical knowledge and creative skills, I am able to develop solutions personalized and efficient for the needs of my clients.</p>
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
        <h3 style={styles.h3}>Hard Skills</h3>
        <div className="d-flex">
            <div className="Skill">
                <h4>HTML</h4>
                <img className="IconSkill" src={iconOn} alt="on"/>
                <img className="IconSkill" src={iconOff} alt="on"/>
            </div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  containerInfo:{
    position: 'relative',
    top: '50px',
    border: '2px solid rgba(255, 255, 255, 0.575)',
    borderRadius: '10px',
    color: 'aliceblue',
    '--bs-gutter-x':'0',
  },
  Info:{
    backgroundColor:' rgba(181, 180, 180, 0.226)',
    padding: '30px',
    fontFamily: "'Lora', serif",
    textAlign:'center',
  },
  icon: {
    width: '28px',
    margin: '2px',
  },
  h1:{
    fontSize: '50px',
  },
  h3:{
    fontSize: '30px',
    margin:'5px',
    fontWeight:'bolde',
  },
};

export default AboutContainer;