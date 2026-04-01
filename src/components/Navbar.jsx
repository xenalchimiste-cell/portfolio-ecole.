

const Navbar = () => {
  const navLinks = [
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between max-w-4xl h-16 px-4 mx-auto">
        <a href="#" className="font-bold text-lg tracking-tight">AG.</a>
        <div className="flex space-x-8 text-sm font-medium text-muted-foreground transition-colors">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-foreground">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
