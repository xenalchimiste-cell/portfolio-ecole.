/**
 * Architecture Overview:
 * - App.jsx: Main entry point that orchestrates the layout.
 * - Section.jsx: Reusable wrapper to ensure consistent spacing, typography, and animations.
 * - Data Files: Content is decoupled from components (src/data/) for better maintainability.
 * - Tailwind v4: Performance-first CSS using CSS variables and OKLCH color space.
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-foreground bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="container max-w-4xl px-4 py-20 mx-auto space-y-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;