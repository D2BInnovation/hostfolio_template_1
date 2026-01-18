import React from 'react';
import './Hero.css';
import data from '../../data.json';
import type { PortfolioData } from '../types';

const Hero: React.FC = () => {
  const { personal, hero } = data as PortfolioData;

  // Don't render section if hero data is not present
  if (!hero || (!hero.greeting && !hero.description)) {
    return null;
  }

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {hero.greeting && (
            <h1 className="hero-title">
              {hero.greeting} <span className="highlight">{personal?.name || ''}</span>
            </h1>
          )}
          {personal?.title && <h2 className="hero-subtitle">{personal.title}</h2>}
          {hero.description && <p className="hero-description">{hero.description}</p>}
          {(hero.primaryButton || hero.secondaryButton) && (
            <div className="hero-buttons">
              {hero.primaryButton?.text && hero.primaryButton?.link && (
                <a href={hero.primaryButton.link} className="btn btn-primary">
                  {hero.primaryButton.text}
                </a>
              )}
              {hero.secondaryButton?.text && hero.secondaryButton?.link && (
                <a href={hero.secondaryButton.link} className="btn btn-secondary">
                  {hero.secondaryButton.text}
                </a>
              )}
            </div>
          )}
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