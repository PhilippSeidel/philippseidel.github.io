import React from 'react';
import './Resume.css';


const Resume: React.FC = () => {
  return (
    <section>
      <h1><i className="bi bi-folder2-open"></i> What I did and what I can do</h1>
      <br/>
      <h3>Education</h3>
      <p>
        Bachelor of Science in Computer Science at <a href='https://kit.edu'>KIT</a><br/>
        <small>Thesis topic: <i>Diffusion-based Imitation Learning using Motion Primitives</i></small>
      </p>
      <br/>
      <h3>Experience</h3>
      <p>
        <b>Feb 2023 - Mar 2024:</b> Student Assistant at <a href='https://h2t.iar.kit.edu/'>H<sup>2</sup>T</a> (<a href='https://h2t.iar.kit.edu/english/21_2658.php'>JuBot</a> Project)<br/>
        <br/>
        <b>Sep 2022 - Feb 2023:</b> Student Assistant at <a href='https://tva.kastel.kit.edu/'>TVA</a> (<a href='https://www.provideq.org/'>ProvideQ</a> Project)<br/>
        <br/>
        <b>2020 - 2022:</b> Tutor in Software Engineering and eezi
      </p>
      <br/>
      <h3>Skills</h3>
      <h5>Programming Languages</h5>
      TODO: list
      <h5>Other Skills</h5>
      TODO: list
    </section>
  );
};

export default Resume;
