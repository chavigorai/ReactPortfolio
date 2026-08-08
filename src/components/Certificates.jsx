function Certificates() {
  return (
    <section className="certificates" id="certificates">
      <h2>Certifications & Achievements</h2>

      <div className="certificate-container">

        {/* Machine Learning Workshop */}
        <div className="certificate-card">
          <div className="certificate-icon">🤖</div>

          <h3>Machine Learning Workshop</h3>

          <p>Certificate of Participation</p>

          <span>RVS College of Engineering and Technology</span>

          <a
            href="/certificates/ml-workshop.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-btn"
          >
            View Certificate
          </a>
        </div>

        {/* Student Registration Certificate */}
        <div className="certificate-card">
          <div className="certificate-icon">🎓</div>

          <h3>Student Registration Certificate</h3>

          <p>Student Registration</p>

          <a
            href="/certificates/student-registration.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-btn"
          >
            View Certificate
          </a>
        </div>

      </div>
    </section>
  );
}

export default Certificates;