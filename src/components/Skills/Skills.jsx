import React from 'react';
import TechnicalSkills from './TechnicalSkills';
import NonTechnical from './NonTechnical';
import './skills.css';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My skill sets</span>

      <div className="skills__container">
        <TechnicalSkills />
        <NonTechnical />
      </div>
    </section>
  );
};

export default Skills;
