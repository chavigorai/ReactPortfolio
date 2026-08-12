function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Let's Connect</h2>

      <p className="contact-intro">
        I'm always open to discussing new opportunities, projects,
        collaborations, or simply connecting with fellow developers.
      </p>

      <div className="contact-container">

        <div className="contact-card">
          <div className="contact-icon">📧</div>
          <h3>Email</h3>
          <p>thechavigorai@gmail.com</p>

          <a
            href="mailto:thechavigorai@gmail.com"
            className="contact-btn"
          >
            Send Email
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">💼</div>
          <h3>LinkedIn</h3>
          <p>Let's connect professionally</p>

          <a
            href="https://www.linkedin.com/in/chavi-gorai-418149302/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            View LinkedIn
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">💻</div>
          <h3>GitHub</h3>
          <p>Explore my projects and code</p>

          <a
            href="https://github.com/chavigorai"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            View GitHub
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;