import React from 'react';
import './portfolio.css';
import reposense from "../../Assets/reposense.png";
import aiinterview from "../../Assets/aiinterview.png";
import herbvision from "../../Assets/herbvision.png";
const Portfolio = () => {
  const projects = [
    {
      title: "RepoSense AI – GitHub Repository Chatbot",
      description: `Developed a full-stack AI application using FastAPI, React, LangChain, and FAISS to enable context-aware querying of GitHub repositories via Retrieval-Augmented Generation (RAG).`,

      link: "https://github.com/Venu-16/RepoSense-AI",
      image: reposense
    },
    {
      title: "AI Interview Assistant ",
      description: `Developed an AI-powered interview assistant using Streamlit, LangChain, and Groq, implementing an
end-to-end pipeline for question generation, speech-to-text processing, answer evaluation, and feedback
generation.`,
      link: "https://github.com/Venu-16/AI-Interview-Assistant",
      image: aiinterview
    },
    {
      title: "Herb Vision",
      description: `Built a full-stack AI application for medicinal plant recognition using React and Flask, integrating deep
learning models (DenseNet121, MobileNetV2) for real-time image classification.`,
      link: "https://github.com/Venu-16/HERB-VISION",
      image: herbvision
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
