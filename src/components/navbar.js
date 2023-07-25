import IconReact from './icons/icons8-react-native.svg';
import { Link } from 'react-router-dom';
import './master.css';
function NavBar() {
  return (
    <div>
      <nav className="container" style={styles.NavBar}>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <Link to='/'style={styles.a}>Home</Link>
          </li>
          <li style={styles.li}>
            <Link to='/AboutPage'style={styles.a}>About</Link>
          </li>
          <li style={styles.li}>
            <Link to='/'style={styles.a}><img className='IconReact' src={IconReact} alt="Icon React" /></Link>
          </li>
          <li style={styles.li}>
            <Link to='/ToolsPage'style={styles.a}>Tools</Link>
          </li>
          <li style={styles.li}>
            <Link to='/ProjectPage'style={styles.a}>Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
const styles = {
  NavBar:{
    position: 'relative',
    top: '20px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.441)',
  },
  ul: {
    paddingLeft: '0',
    display: 'flex',
    top: '10px',
    listStyle:'none',
    justifyContent: 'space-around',
  },
  li:{
    margin: 'auto',
    fontFamily: "'Lora', serif",
  },
  a:{
    color: 'aliceblue',
    textDecoration:'none',
  }
}

export default NavBar;
