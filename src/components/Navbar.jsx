import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Chavi</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="social-icons">
        <a
          href="https://github.com/chabigorai53-cell"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
         href="https://www.linkedin.com/in/chavi-gorai-418149302"
         target="_blank"
         rel="noreferrer"
         >

         <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;