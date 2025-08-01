import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Zoom Attendance Tracker",
      description: "Built Python-Flask tool using Zoom, Sheets APIs for auto attendance tracking and real-time reports.",
      link: "https://github.com/Venu-16/Zoom-Attendance-tracker"
    },
    {
      title: "AI Health Bot",
      description: "Created health chatbot using AI, NLP, voice input, and NFT records on Aptos blockchain.",
      link: "https://github.com/Venu-16/AI-Health-Bot-Medical-NFTs-on-Aptos-"
    },
    {
      title: "Ai-Travel-Planner",
      description: "Generates Travelling Plan depending on your intrests",
      link: "https://github.com/Venu-16/ai-travel-planner"
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
