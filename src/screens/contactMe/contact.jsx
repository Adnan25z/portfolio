import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

import './contact.css'; // Make sure this path is correct for your CSS

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Initialize the form ref
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // Initialize EmailJS with your user ID
    emailjs.init("user_7Um6TK5tVY9lMaHuTaPQo");

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('service_ofjyvsj', 'template_dfx9q24', templateParams)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      }, error => {
        console.log('FAILED...', error);
        alert('Failed to send the message, please try again.');
      });
  };

  return (
    <div className="contact-section">
    <div className="contact-container">
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btnCon">Send Message</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;