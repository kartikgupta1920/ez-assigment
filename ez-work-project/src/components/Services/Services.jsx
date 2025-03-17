import React from 'react';
import './Services.css';
import presentation from '../../assets/presentation.png';
import audio from '../../assets/audio.png';
import translation from '../../assets/translation.png';
import graphic from '../../assets/graphic.png';
import research from '../../assets/research.png';
import data from '../../assets/data.png';

const servicesData = [
  { title: 'Presentation Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: presentation },
  { title: 'Audio - Visual Production', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: audio },
  { title: 'Translation Services', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: translation },
  { title: 'Graphic Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: graphic },
  { title: 'Research & Analytics', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: research },
  { title: 'Data Processing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: data },
];

const Services = () => {
  return (
    <div className="services-container">
      {servicesData.map((service, index) => (
      <div key={index} className="service-card">
      <div className="icon-title">
        <img
          src={service.icon}
          alt={service.title}
          className="service-icon"
        />
        <h3 className="service-title">{service.title}</h3>
      </div>
      <p className="service-description">{service.description}</p>
    </div>   
      ))}
    </div>
  );
};

export default Services;