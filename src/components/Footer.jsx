

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container max-w-4xl px-4 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Andréas Giacomello. Built with React & Tailwind.
        </p>
        <div className="flex space-x-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">LinkedIn</a>
          <a href="https://github.com/xenalchimiste-cell" className="hover:text-foreground">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
