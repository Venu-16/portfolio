import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "YouTube Ad View Predictor",
      description: "Predicts ad views using ML model",
      link: "#"
    },
    {
      title: "AI Health Bot",
      description: "Diagnoses symptoms using AI + NFT",
      link: "#"
    },
    {
      title: "Task Scheduler (Weather-based)",
      description: "Schedules tasks depending on weather",
      link: "#"
    }
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="portfolio__container">
        {projects.map((project, index) => (
          <div className="portfolio__item" key={index}>
            <h3 className="portfolio__title">{project.title}</h3>
            <p className="portfolio__desc">{project.description}</p>
            <a href={project.link} className="portfolio__button" target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
