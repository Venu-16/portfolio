import React from 'react';
import './portfolio.css';
import medicalImage from '../../Assets/medical-appointment.png';
import jobImage from '../../Assets/fake-job-detection.png';
import travelImage from '../../Assets/travel-planner.png';

const Portfolio = () => {
  const projects = [
    {
      title: "Medical Appointment Booking System",
      description: "AI-powered medical appointment scheduler with LangGraph, LangChain, and Gemini for automated booking and reminders.",
      link: "https://github.com/Venu-16/Medical-Appointment-Scheduling-AI-Agent",
      image: medicalImage
    },
    {
      title: "Fake Job Detection",
      description: "NLP-based ML model detecting fraudulent job postings using TF-IDF embeddings with LIME interpretability.",
      link: "https://github.com/Venu-16/Fake-Job-Postings-Detection-",
      image: jobImage
    },
    {
      title: "Ai-Travel-Planner",
      description: "AI-powered travel planner generating personalized itineraries based on user interests.",
      link: "https://github.com/Venu-16/ai-travel-planner",
      image: travelImage
    }
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="portfolio__container">
        {projects.map((project, index) => (
          <div className="portfolio__item" key={index}>
            <img src={project.image} alt={project.title} className="portfolio__image" />
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
