import './navbar.css';

function NavBar() {
  return (
    <nav className="container-fluid" id='containerNavbar'>
        <ul style={styles.ul}>
          <li>
            <a className="nav-link active" aria-current="page">Home</a>
          </li>
          <li>
            <a className="nav-link" href="#">Sobre</a>
          </li>
          <li>
            <a className="navbar-brand" href="#"><h3 id="NameMenu">Vinicius</h3></a>
          </li>
          <li>
            <a className="nav-link">Ferramentas</a>
          </li>
          <li>
            <a className="nav-link">Projetos</a>
          </li>
        </ul>
    </nav>
  );
}
const styles = {
  ul: {
    paddingLeft: '0',
  }
}

export default NavBar;
