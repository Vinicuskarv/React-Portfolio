import '../../components/master.css';
import './About.css';
import ContaineIcons from '../../components/contaiIcons';
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
        <ContaineIcons/>
        <h3 style={styles.h3}>Hard Skills</h3>
        <div className="d-flex">
            <div style={styles.Skill}>
                <h4>HTML</h4>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
            </div>
            <div style={styles.Skill}>
                <h4>CSS</h4>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOff} alt="off"/>
            </div>
            <div style={styles.Skill}>
                <h4>React.js</h4>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOff} alt="off"/>
                <img style={styles.IconSkill} src={iconOff} alt="off"/>
            </div>
            <div style={styles.Skill}>
                <h4>PHP</h4>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOff} alt="off"/>
                <img style={styles.IconSkill} src={iconOff} alt="off"/>
            </div>
        </div>
        <div className="d-flex">
            <div style={styles.Skill}>
                <h4>Node.js</h4>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOff} alt="off"/>
                <img style={styles.IconSkill} src={iconOff} alt="off"/>
                <img style={styles.IconSkill} src={iconOff} alt="off"/>
                <img style={styles.IconSkill} src={iconOff} alt="off"/>
            </div>
            <div style={styles.Skill}>
                <h4>MySQL</h4>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOff} alt="off"/>
                <img style={styles.IconSkill} src={iconOff} alt="off"/>
                <img style={styles.IconSkill} src={iconOff} alt="off"/>
            </div>
            <div style={styles.Skill}>
                <h4>Inglês</h4>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOff} alt="off"/>
                <img style={styles.IconSkill} src={iconOff} alt="off"/>
                <img style={styles.IconSkill} src={iconOff} alt="off"/>
            </div>
            <div style={styles.Skill}>
                <h4>JavaScript</h4>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOn} alt="on"/>
                <img style={styles.IconSkill} src={iconOff} alt="off"/>
                <img style={styles.IconSkill} src={iconOff} alt="off"/>
            </div>
        </div>
      </div>
    </div>
  );
}
const styles = {
    Skill:{
        margin: 'auto',
        padding: '10px',
    },
    IconSkill:{
        width:'25px',
    },
    containerInfo:{
        position: 'relative',
        top: '50px',
        border: '2px solid rgba(255, 255, 255, 0.575)',
        borderRadius: '10px',
        color: 'aliceblue',
        '--bs-gutter-x':'0',
        marginBottom:'100px',
    },
    Info:{
        backgroundColor:' rgba(181, 180, 180, 0.426)',
        padding: '30px',
        fontFamily: "'Lora', serif",
        textAlign:'center',
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