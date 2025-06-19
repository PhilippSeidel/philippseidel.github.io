import React from 'react';
import './Resume.css';
import '../devicon.min.css';

const Resume: React.FC = () => {
  return (
    <section>
      <h1><i className="bi bi-folder2-open"></i> What I did and what I can do</h1>
      <br/>
      <h3><i className="bi bi-mortarboard"></i> Education</h3>
      <br/>
      <p>
        <i className="bi bi-stars"></i> <b>2025 - 2027:</b> <b>Master of Science</b> in <b>Systems, Control and Robotics</b> at <a href='https://kth.se'>KTH</a>
        <br/><br/>
        <i className="bi bi-star-fill"></i> <b>2019 - 2024:</b> <b>Bachelor of Science</b> in <b>Computer Science</b> at <a href='https://kit.edu'>KIT</a><br/>
        <small>Thesis topic: <i>Diffusion-based Imitation Learning using Motion Primitives</i></small>
      </p>
      <br/>
      <h3><i className="bi bi-pc-display"></i> Professional Experience</h3>
      <br/>
      <p>
        <b>Feb 2023 - Mar 2024:</b> Student Assistant at <a href='https://h2t.iar.kit.edu/'>H<sup>2</sup>T</a> (<a href='https://h2t.iar.kit.edu/english/21_2658.php'>JuBot</a> Project)<br/>
        <br/>
        <b>Sep 2022 - Feb 2023:</b> Student Assistant at <a href='https://tva.kastel.kit.edu/'>TVA</a> (<a href='https://www.provideq.org/'>ProvideQ</a> Project)<br/>
        <br/>
        <b>2020 - 2022:</b> Tutor in Software Engineering and eezi
      </p>
      <br/>
      <h3><i className="bi bi-boxes"></i> Skills</h3>
      <br/>
      <h5><i className="bi bi-terminal"></i> Programming Languages</h5>
      
      <p>
        <span className="badge me-2 skill-badge py-1" style={{backgroundColor: "#3776AB"}}><i className="devicon-python-plain colored"/> Python</span>
        <span className="badge me-2 skill-badge py-1" style={{backgroundColor: "#ED8B00"}}><i className="devicon-java-plain"/> Java</span>
        <span className="badge me-2 skill-badge py-1" style={{backgroundColor: "#00599C"}}><i className="devicon-cplusplus-plain"/> C++</span>
        <span className="badge me-2 skill-badge py-1" style={{backgroundColor: "#A8B9CC"}}><i className="devicon-c-plain"/> C</span>
        <span className="badge me-2 skill-badge py-1" style={{backgroundColor: "#68217A"}}><i className="devicon-csharp-plain"/> C#</span>
        <span className="badge me-2 skill-badge py-1" style={{backgroundColor: "#E34F26"}}><i className="devicon-html5-plain"/> html</span>
        <span className="badge me-2 skill-badge py-1" style={{backgroundColor: "#1572B6"}}><i className="devicon-css3-plain"/> CSS</span>
        <span className="badge me-2 skill-badge py-1" style={{backgroundColor: "#3178C6"}}><i className="devicon-typescript-plain"/> Typescript</span>
        <span className="badge me-2 skill-badge py-1" style={{backgroundColor: "#61DAFB"}}><i className="devicon-react-plain"/> React</span>
      </p>
      <br/>
      <h5><i className="bi bi-translate"></i> Human Languages</h5>
      
      <p>
        Fluent:<br/>
        <span className="badge me-2 skill-badge py-1" style={{backgroundColor: "#FDE293"}}>🇩🇪 German</span>
        <span className="badge me-2 skill-badge py-1" style={{backgroundColor: "#F8D7DA"}}>🇬🇧 English</span>
      <br/><br/>
        Beginner:<br/>
        <span className="badge me-2 skill-badge py-1" style={{backgroundColor: "#E6E6FA"}}>🇫🇷 French</span>
        <span className="badge me-2 skill-badge py-1" style={{backgroundColor: "#B3D9FF"}}>🇸🇪 Swedish</span>
      </p>
      <br/>
      <h5><i className="bi bi-puzzle"></i> Other Skills</h5>
      <p>
        <span className="badge me-2 skill-badge py-1" style={{backgroundColor: "#0ba387"}}><i className="bi bi-clipboard-check bi-skill"></i> Teaching</span>
        <span className="badge me-2 skill-badge py-1" style={{backgroundColor: "#0b57a3"}}><i className="bi bi-mortarboard bi-skill"></i> Academic Research</span>
        <span className="badge me-2 skill-badge py-1" style={{backgroundColor: "#61DACB"}}><i className="devicon-latex-original"/> LaTeX</span>
      </p>
    </section>
  );
};

export default Resume;
