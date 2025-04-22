import React from 'react';

const TechnicalSkills = () => {
  const skills = [
    ['PHP', 'Basic'],
    ['Node js', 'Basic'],
    ['Java', 'Intermediate'],
    ['MySQL', 'Intermediate'],
  ];

  const column1 = skills.slice(0, 2);
  const column2 = skills.slice(2, 4);

  return (
    <div className="skills__content">
      <h3 className="skills__title">Technical Skills</h3>
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

export default TechnicalSkills;
