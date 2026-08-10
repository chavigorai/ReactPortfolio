function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        {/* Clinic Appointment System */}
        <div className="project-card">
          <div className="project-icon">🏥</div>

          <h3>Clinic Appointment System</h3>

          <p>
            A full-stack web application developed to manage clinic
            appointments, doctors and patients through an easy-to-use
            interface.
          </p>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>PHP</span>
            <span>MySQL</span>
          </div>

          <a
            href="https://github.com/chavigorai/clinicappointmentsystem"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View GitHub
          </a>
        </div>

        {/* Personal Portfolio */}
        <div className="project-card">
          <div className="project-icon">💻</div>

          <h3>Personal Portfolio</h3>

          <p>
            A responsive developer portfolio built with React.js to
            showcase my education, technical skills, projects and
            certifications.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>Vite</span>
          </div>

          <a
            href="https://github.com/chavigorai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View GitHub
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;