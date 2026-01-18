import React from 'react';
import './About.css';
import data from '../../data.json';
import type { PortfolioData } from '../types';

const About: React.FC = () => {
  const { about } = data as PortfolioData;

  // Don't render section if about data is not present or empty
  if (!about || (!about.description?.length && !about.skills?.length)) {
    return null;
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          {about.description && about.description.length > 0 && (
            <div className="about-text">
              {about.description.map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
          {about.skills && about.skills.length > 0 && (
            <div className="skills">
              <h3>Skills & Technologies</h3>
              <div className="skills-grid">
                {about.skills.map((skill: string, index: number) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;