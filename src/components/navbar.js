function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
      <div className="container d-flex" id="containe_nav">
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" style={{ boxShadow: 'none' }}>
          <svg id="Menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">
            <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
          </svg>
        </button>
        <a href="/index.html" style={{ textDecoration: 'none' }}><h3 id="NameMenu">&lt;Vinicius/&gt;</h3></a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/indexSobre.html">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/indexFerramentas.html">Ferramentas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/indexProjetos.html">Projetos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

