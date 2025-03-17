import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import ContactForm from '../ContactForm/ContactForm';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page-wrapper">
      <Header />
      <h2 className="services-subtitle">Suite Of Business Support Services</h2>
      <p className="services-description">
         Hey there, I have made some changes to the style. I hope you like it. The purpose of this is to stand out from others and show some creativity with my tech skills.</p>
         <p>Also the new backend api is still not working.</p>
      <div className="services-content">
        <ContactForm />
        <Services />
      </div>
    </div>
  );
};

export default ServicesPage;