import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!email) {
      setErrorMessage('Email is required.');
      return;
    }

   
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://test.ezworks.ai/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.status === 200) {
        setSuccessMessage('Form Submitted');
        setEmail('');
      } else if (response.status === 422) {
        setErrorMessage('Emails ending with @ez.works are not allowed.');
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }

    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An unexpected error occurred. Please try again later.');
    }

    setIsLoading(false);
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`contact-input ${errorMessage ? 'error' : ''}`}
        />
        
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}

        <button
          type="submit"
          className="contact-button"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Contact Me'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
