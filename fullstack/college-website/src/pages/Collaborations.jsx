// src/pages/CollaborationsPage.jsx
import React from 'react';
import './Collaborations.css';
import tcsLogo from 'C:/Users/Admin/Desktop/fullstack/college-website/src/assets/tcsLogo.jpg';
import iitbLogo from 'C:/Users/Admin/Desktop/fullstack/college-website/src/assets/iitbLogo.jpg';
import microsoftLogo from 'C:/Users/Admin/Desktop/fullstack/college-website/src/assets/microsoftLogo.jpg';

const collaborations = [
  {
    name: 'Tata Consultancy Services',
    type: 'Industry Partner',
    description: 'TCS collaborates with us on internship programs, placement drives, and industrial training sessions.',
    logo: tcsLogo
  },
  {
    name: 'IIT Bombay',
    type: 'Academic Partner',
    description: 'Joint research projects, faculty development, and student exchange programs.',
    logo: iitbLogo
  },
  {
    name: 'Microsoft Learn for Educators',
    type: 'Tech Partnership',
    description: 'Access to Azure cloud, technical mentoring, and certification programs.',
    logo: microsoftLogo
  }
];

const CollaborationsPage = () => {
  return (
    <div className="collaborations-container">
      <header className="collab-header">
        <h1>🤝 Collaborations</h1>
        <p>We are proud to partner with leading institutions and industries to provide excellence in education.</p>
      </header>

      <div className="collab-grid">
        {collaborations.map((item, index) => (
          <div className="collab-card" key={index}>
            <img src={item.logo} alt={item.name} className="collab-logo" />
            <h3>{item.name}</h3>
            <span className="tag">{item.type}</span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationsPage;