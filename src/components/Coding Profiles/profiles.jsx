import React from 'react';
import './profiles.css';

const CodingProfiles = () => {
  const profiles = [
    {
      name: "LeetCode",
      link: "https://leetcode.com/venumadhav2216",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
    },
    {
      name: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/user/venumadh1d8r/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
    },
    {
      name: "CodeChef",
      link: "https://www.codechef.com/users/venumadhav2212",
      logo: "https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/logo.png"
    },
    {
      name: "HackerRank",
      link: "https://www.hackerrank.com/venumadhav2212",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png"
    }
  ];

  return (
    <section className="coding section" id="coding">
      <h2 className="section__title">Coding Profiles</h2>
      <span className="section__subtitle">Competitive Programming & Practice</span>

      <div className="coding__container">
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noreferrer"
            className="coding__item"
          >
            <img src={profile.logo} alt={profile.name} className="coding__logo" />
            <span>{profile.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
