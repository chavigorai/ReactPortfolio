import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="hero-text">
          <p className="hero-greeting">👋 Hello, I'm</p>

          <h1>Chavi Gorai</h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-description">
            I build responsive and user-friendly web applications using
            React, JavaScript, HTML, CSS, PHP and MySQL. I’m passionate
            about learning new technologies and turning ideas into
            practical digital solutions.
          </p>

          <div className="hero-buttons">
            <a href="/resume.pdf" download className="btn">
              Download Resume
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-ring">
            <img
              src={profile}
              alt="chavi Gorai"
              className="profile-img"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;