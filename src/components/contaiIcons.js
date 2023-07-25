import icongithub from '../components/icons/icons8-github.svg';
import iconlinkedin from '../components/icons/icons8-linkedin.svg';
import iconwhatsapp from '../components/icons/icons8-whatsapp.svg';


function ContaineIcons() {
    return (
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
    );
}
const styles = {
    icon: {
        width: '28px',
        margin: '2px',
    },
}
export default ContaineIcons;