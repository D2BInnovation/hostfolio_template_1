import React from 'react';
import './Hero.css';
import data from '../../data.json';

const Hero: React.FC = () => {
  const { personal, hero } = data;

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {hero.greeting} <span className="highlight">{personal.name}</span>
          </h1>
          <h2 className="hero-subtitle">{personal.title}</h2>
          <p className="hero-description">
            {hero.description}
          </p>
          <div className="hero-buttons">
            <a href={hero.primaryButton.link} className="btn btn-primary">
              {hero.primaryButton.text}
            </a>
            <a href={hero.secondaryButton.link} className="btn btn-secondary">
              {hero.secondaryButton.text}
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <span>Your Photo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;