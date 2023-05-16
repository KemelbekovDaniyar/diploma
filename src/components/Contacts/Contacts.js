import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts-container container">
      <h2 className="contacts-heading">Get in Touch</h2>
      <div className="contact-details">
        <p>
          <strong className="contact-label">Address:</strong> 123 Music Street, Cityville, State, Country
        </p>
        <p>
          <strong className="contact-label">Phone:</strong> +996 502 01 92 74
        </p>
        <p>
          <strong className="contact-label">Email:</strong> kemelbekovdaniyar0@gmail.com
        </p>
        <p>
          <strong className="contact-label">Working Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM
        </p>
      </div>
      <p className="contact-message">
        Let the rhythm of your thoughts reach us! We're just a call, an email, or a visit away. Whether you have a question, need assistance, or simply want to share your musical journey, our dedicated team of melody maestros is here to amplify your experience.
      </p>
      <div className="contact-action">
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
};

export default Contacts;
