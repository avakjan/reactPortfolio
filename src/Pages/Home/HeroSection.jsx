export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--img">
        <img src="./img/german-avakjan.jpg" alt="Hero Section" />
      </div>
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm German Avakjan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p>
        </div>
      </div>
    </section>
  );
}
