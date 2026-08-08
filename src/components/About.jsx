function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-heading">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <p>
            I'm <strong>chavi Gorai</strong>, a passionate Full Stack
            Developer and MCA student who enjoys creating modern,
            responsive and user-friendly web applications.
          </p>

          <p>
            I have hands-on experience with
            <strong> React, JavaScript, HTML, CSS, PHP and MySQL</strong>.
            I enjoy solving problems, learning new technologies and
            transforming ideas into practical digital solutions.
          </p>

          <div className="about-highlights">

            <div>
              <span>💻</span>
              <h3>Web Development</h3>
              <p>Responsive & modern websites</p>
            </div>

            <div>
              <span>⚛️</span>
              <h3>React Development</h3>
              <p>Interactive user interfaces</p>
            </div>

            <div>
              <span>🚀</span>
              <h3>Continuous Learning</h3>
              <p>Always exploring new technologies</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;