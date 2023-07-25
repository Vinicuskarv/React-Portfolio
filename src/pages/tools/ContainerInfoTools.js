import '../../components/master.css';
import IconPhp from '../../components/icons/icons8-php.png'
import IconMysql from '../../components/icons/icons8-mysql.png'
import ContaineIcons from '../../components/contaiIcons';


function ToolsContainer() {
  return (
    <div className="container" style={styles.containerInfo}>
      <div id='InfoContainer' style={styles.Info}>
        <h1 style={styles.h1}>Technologies</h1>
        <p style={styles.p}>Already used</p>
        <div>
            <i style={styles.icon} class="devicon-html5-plain"></i>
            <i style={styles.icon} class="devicon-css3-plain"></i>
            <i style={styles.icon} class="devicon-javascript-plain"></i>
            <img style={styles.iconImg} src={IconPhp} alt="Icon Php" />
            <img style={styles.iconImg} src={IconMysql} alt="Icon Mysql" />
            <i style={styles.icon} class="devicon-react-original"></i>
        </div>
        <ContaineIcons/>
        <div style={styles.poesia}>
            <p>"Learning is the only thing the mind never<br/> tires of, never fears and never regrets."</p>
            <h4>~Leonardo da Vinci</h4>
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
    poesia:{
        marginTop:'50px',
    },
    h1:{
        fontSize: '45px',
    },
    p:{
        margin:'25px',
        fontWeight:'bolde',
    },
    icon:{
        fontSize: '50px',
        margin:'5px',
    },
    iconImg:{
        position: 'relative',
        margin:'5px',
        top: '-18px',
        opacity: '95%',
        width:' 58px',
    }
};

export default ToolsContainer;