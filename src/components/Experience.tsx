import React from 'react';
import './Experience.css';
import data from '../../data.json';
import type { PortfolioData } from '../types';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const { experience } = data as PortfolioData;

  // Don't render section if experience data is not present or empty
  if (!experience || !experience.length) {
    return null;
  }

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experience.map((exp: ExperienceItem, index) => (
            <div key={exp.id || index} className="experience-item">
              <div className="experience-content">
                <h3 className="experience-title">{exp.position}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                <div className="experience-meta">
                  <span className="experience-duration">{exp.duration}</span>
                  <span className="experience-location">{exp.location}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="experience-achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="experience-technologies">
                    <h5>Technologies:</h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;