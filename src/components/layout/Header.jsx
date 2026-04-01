function Header() {
    return (
      <header role="banner" style={styles.header}>
        <nav style={styles.nav} aria-label="Navigation principale">
          <span style={styles.logo}>AG</span>
          <ul style={styles.navList}>
            <li><a href="#about">À propos</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  const styles = {
    header: {
      background: "var(--bg-secondary)",
      padding: "1rem 1.5rem"
    },
    nav: {
      maxWidth: "1100px",
      margin: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    navList: {
      display: "flex",
      gap: "1.5rem",
      listStyle: "none"
    },
    logo: {
      fontWeight: "600"
    }
  };
  
  export default Header;