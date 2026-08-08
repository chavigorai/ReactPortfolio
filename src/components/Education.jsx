import { useState } from "react";

function Education() {
  const [selectedEducation, setSelectedEducation] = useState(null);

  const educationData = [
    {
      degree: "MCA",
      college: "RVS College of Engineering and Technology",
      year: "2025 - Present",
      icon: "🎓",
      details:
        "Currently pursuing Master of Computer Applications with a focus on software development, web technologies and modern programming concepts.",
    },
    {
      degree: "BCA",
      college: "The Graduate School, College for Women",
      year: "2022 - 2025",
      icon: "🎓",
      details:
        "Completed Bachelor of Computer Applications with a strong foundation in programming, databases and web development.",
    },
    {
      degree: "12th",
      college: "Jamshedpur Women's University",
      year: "2020 - 2022",
      icon: "🏫",
      details:
        "Completed higher secondary education with a focus on academic and computer-related studies.",
    },
    {
      degree: "10th",
      college: "Omi Memorial Public School, Chandil",
      year: "2020",
      icon: "🏫",
      details:
        "Completed secondary education with a strong academic foundation.",
    },
  ];

  return (
    <section className="education" id="education">
      <h2>Education</h2>

      <div className="education-container">
        {educationData.map((education, index) => (
          <div className="education-card" key={index}>
            <div className="education-icon">{education.icon}</div>

            <h3>{education.degree}</h3>

            <p>{education.college}</p>

            <span>{education.year}</span>

            <button
              className="view-details"
              onClick={() => setSelectedEducation(education)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedEducation && (
        <div className="education-modal">
          <div className="education-modal-content">
            <div className="modal-icon">
              {selectedEducation.icon}
            </div>

            <h2>{selectedEducation.degree}</h2>

            <h3>{selectedEducation.college}</h3>

            <span className="modal-year">
              {selectedEducation.year}
            </span>

            <p>{selectedEducation.details}</p>

            <button
              className="modal-close"
              onClick={() => setSelectedEducation(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Education;