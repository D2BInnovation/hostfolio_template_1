import React from 'react';
import './Experience.css';
import data from '../../data.json';

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
  const { experience } = data;

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experience.map((exp: ExperienceItem, index) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-marker">
                <div className="marker-dot"></div>
                {index < experience.length - 1 && <div className="marker-line"></div>}
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="position">{exp.position}</h3>
                  <div className="company-info">
                    <span className="company">{exp.company}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                  <span className="duration">{exp.duration}</span>
                </div>
                <p className="description">{exp.description}</p>
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;