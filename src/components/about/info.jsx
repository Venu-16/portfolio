import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">

      <div className="about__box">
        <i className="bx bx-building-house about__icon"></i>

        <h3 className="about__title">
          Cognizant
        </h3>

        <span className="about__subtitle">
          Programmer Analyst Trainee <br />
          Jan 2026 - Apr 2026
        </span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">
          Completed
        </h3>

        <span className="about__subtitle">
          5+ Projects in AIML <br />
          2 Projects in MERN
        </span>
      </div>

      <div className="about__box">
        <i className="bx bx-heart about__icon"></i>

        <h3 className="about__title">
          Interest
        </h3>

        <span className="about__subtitle">
          AI, ML, Gen AI <br />
          DSA & Full Stack
        </span>
      </div>

    </div>
  )
}

export default Info