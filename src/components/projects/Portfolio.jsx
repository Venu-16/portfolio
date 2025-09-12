import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Medical Appointment Booking System",
      description: "Currently Working AI-powered medical Appointment scheduler with LangGraph, LangChain, Gemini, automating booking, insurance, and reminders.",
      link: "https://github.com/Venu-16/Medical-Appointment-Scheduling-AI-Agent"
    },
    {
      title: "AI Health Bot",
      description: "Created a health chatbot using AI, NLP, and voice input and integrated NFT minting on the Aptos blockchain for secure medical records.",
      link: "https://github.com/Venu-16/AI-Health-Bot-Medical-NFTs-on-Aptos-"
    },
    {
      title: "Ai-Travel-Planner",
      description: "Developed an AI-powered travel planner that generates personalized itineraries tailored to individual user interests.",
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
