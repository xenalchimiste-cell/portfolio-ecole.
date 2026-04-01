import Button from "../ui/Button";

function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <h1 id="hero-title">Andréas Giacomello</h1>
      <p>Étudiant développeur – BTS SIO SLAM</p>
      <Button href="#projects">Voir mes projets</Button>
    </section>
  );
}

export default Hero;