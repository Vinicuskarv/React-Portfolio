import '../../components/master.css';
import astronauta from '../../components/Astronauta.png';

function ProjectsContainer() {
  return (
    <div className="container" style={styles.containerInfo}>
        <div id='InfoContainer' style={styles.Info}>
            <h1 style={styles.h1}>I'M VINICIUS<br/>CARVALHO</h1>
            <img className='astronauta' src={astronauta} alt="icon from github" />  
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
  h1:{
    fontSize: '50px',
  },

};

export default ProjectsContainer;