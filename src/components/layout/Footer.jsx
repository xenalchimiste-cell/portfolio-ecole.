function Footer() {
    return (
      <footer style={{ textAlign: "center", padding: "2rem 0", color: "var(--text-secondary)" }}>
        <p>© {new Date().getFullYear()} Andréas Giacomello</p>
      </footer>
    );
  }
  
  export default Footer;