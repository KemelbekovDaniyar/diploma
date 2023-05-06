import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h2 className="contacts-heading">Get in Touch</h2>
      <div className="contact-details">
        <p>
          <strong className="contact-label">Address:</strong> 123 Music Street, Cityville, State, Country
        </p>
        <p>
          <strong className="contact-label">Phone:</strong> +1 123-456-7890
        </p>
        <p>
          <strong className="contact-label">Email:</strong> info@musicstore.com
        </p>
        <p>
          <strong className="contact-label">Working Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM
        </p>
      </div>
      <p className="contact-message">
        We would love to hear from you! Reach out to us with any questions or feedback you may have. Our team of music enthusiasts is here to assist you.
      </p>
      <div className="contact-action">
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
};

export default Contacts;
