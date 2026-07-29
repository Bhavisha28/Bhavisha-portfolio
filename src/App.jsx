import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import profile from "./images/profile.jpeg";
function App() {
  let name = "Bhavisha Bela";
  let college = "LD College of Engineering";
  let city = "Ahmedabad";

  return (
    
    <div className="container" id="home">
      <nav className="navbar">

  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#education">Education</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
  <a href="#linkedin">LinkedIn</a>

</nav>
      <img src={profile} alt="My Profile" />
      <h1>{name}</h1>
      <h2 className="title">Information Technology Student</h2>
<p className="tagline">
  Building projects, learning new technologies, and improving my coding skills.
</p>
<p className="subtitle">
  Learning React • C Programming • Web Development
</p>
<div id="about">

      <h2>About Me</h2>

<p>
  I am a second-year Information Technology student at LD College of Engineering.
  I am passionate about programming, web development, and building projects using modern technologies.
</p>

      <p>📚 College: {college}</p>

      <p>🏙️ City: {city}</p>
      </div>
      <div id="skills">

      <h2>My Skills</h2>

<div className="skills">
  <div className="skill-card">
    💻 C Programming
  </div>

  <div className="skill-card">
    🌐 HTML
  </div>

  <div className="skill-card">
    ⚛️ React
  </div>
</div>
</div>
<div id="education">

<h2>Education</h2>

<div className="education-card">

  <h3>LD College of Engineering</h3>

  <p>
    Bachelor of Engineering in Information Technology
  </p>

  <p>
    2025 - Present
  </p>

</div>
</div>
<div id="projects">

<h2>My Projects</h2>

<div className="projects">

  <div className="project-card">
    <h3>🌐 Personal Portfolio Website</h3>
    <p>
      A personal portfolio website created to showcase my skills,
      education, and projects using modern web technologies.
    </p>

    <p>
      Technologies: HTML, CSS, React
    </p>

  </div>

  <div className="project-card">
    <h3>💻 C Programming Practice</h3>
    <p>
      Collection of C programs created while learning programming fundamentals.
    </p>
  </div>

  <div className="project-card">
    <h3>🤝 Group College Project</h3>
    <p>
      Contributed by preparing the project report, documentation, and project sheets.
    </p>
  </div>

</div>
</div>
<div id="contact">
<h2>Contact Me</h2>

<div className="contact-card">

  <p>📧 Email: bhavishabela01@gmail.com</p>

  <p>🔗 LinkedIn: Bhavisha Bela</p>

</div>
</div>
<div id="linkedin">
      <a 
  className="linkedin-btn" 
  href="https://www.linkedin.com/in/bhavisha-bela-892397396" 
  target="_blank"
>
  Connect with Me on LinkedIn
</a>
<footer className="footer">
  <p>
    © 2026 Bhavisha Bela | Information Technology Student
  </p>
</footer>
    </div>
    </div>
    
  );
}

export default App;
