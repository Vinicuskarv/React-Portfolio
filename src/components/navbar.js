import IconReact from './icons/icons8-react-native.svg';
import './master.css';
function NavBar() {
  return (
    <div>
      <nav className="container" style={styles.NavBar}>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <a className="nav-link" href="/">Home</a>
          </li>
          <li style={styles.li}>
            <a className="nav-link" href="/AboutPage">About</a>
          </li>
          <li style={styles.li}>
            <a className="nav-link" href="/">
              <img className='IconReact' src={IconReact} alt="Icon React" />
            </a>
          </li>
          <li style={styles.li}>
            <a className="nav-link">Tools</a>
          </li>
          <li style={styles.li}>
            <a className="nav-link">Projects</a>
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
    color: 'aliceblue',
    margin: 'auto',
    fontFamily: "'Lora', serif",
  }
}

export default NavBar;
