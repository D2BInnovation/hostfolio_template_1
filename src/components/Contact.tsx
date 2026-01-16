import React, { useState } from 'react';
import './Contact.css';
import data from '../../data.json';

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

const Contact: React.FC = () => {
  const { personal, contact } = data;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with email service or backend API
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{contact.title}</h3>
            <p>{contact.description}</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="label">Email:</span>
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </div>
              <div className="contact-item">
                <span className="label">Phone:</span>
                <a href={`tel:${personal.phone}`}>{personal.phone}</a>
              </div>
              <div className="contact-item">
                <span className="label">Location:</span>
                <span>{personal.location}</span>
              </div>
            </div>

            <div className="social-links">
              <h4>Connect with me:</h4>
              <div className="social-icons">
                {contact.socialLinks.map((link: SocialLink, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link ${link.icon}`}
                    aria-label={link.platform}
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;