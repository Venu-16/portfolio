import React from 'react';

const NonTechnical = () => {
  const skills = [
    ['Communication', 'Advanced'],
    ['Teamwork', 'Advanced'],
    ['Problem Solving', 'Intermediate'],
    ['Time Management', 'Intermediate'],
    ['Leadership', 'Basic'],
    ['Adaptability', 'Advanced'],
  ];

  const column1 = skills.slice(0, 3);
  const column2 = skills.slice(3, 6);

  return (
    <div className="skills__content">
      <h3 className="skills__title">Non-Technical Skills</h3>
      <div className="skills__box">
        {[column1, column2].map((col, index) => (
          <div className="skills__group" key={index}>
            {col.map(([name, level]) => (
              <div className="skills__data" key={name}>
                <i className="bx bx-check-circle"></i>
                <div>
                  <h3 className="skills__name">{name}</h3>
                  <span className="skills__level">{level}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NonTechnical;
