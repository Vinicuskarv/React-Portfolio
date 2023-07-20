import React from 'react';

function NavBar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <a href="#" style={styles.link}>Logo</a>
      </div>
      <ul style={styles.navLinks}>
        <li><a href="/" style={styles.link}>Home</a></li>
        <li><a href="/about" style={styles.link}>About</a></li>
        <li><a href="/services" style={styles.link}>Services</a></li>
        <li><a href="/contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
  },
  link: {
    padding: '0.5rem 1rem',
    textDecoration: 'none',
    color: '#D71313',
    transition: 'color 0.2s ease-in-out, background-color 0.2s ease-in-out', // Adicionamos uma transição suave para os efeitos hover
    ':hover': {
      color: '#0D1282',
      cursor: 'pointer',
      backgroundColor: 'black', // Altera o fundo para preto quando o mouse passar sobre o link
    },
  },
};

export default NavBar;
