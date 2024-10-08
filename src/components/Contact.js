// src/Contact.js
import React from 'react';
import '../css/contact.css'; // Assuming you will add styling here

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <section className="contact-section">
        <h2 className="section-title">Get in Touch</h2>
        <p>
          We would love to hear from you! Whether you have questions about our services, need support, or just want to say hello, feel free to reach out to us.
        </p>
        <div className="contact-details">
          <p><strong>Email:</strong> harvesthaven@gmail.com</p>
          <p><strong>Phone:</strong> +123-456-7890</p>
          <p><strong>Address:</strong> Guntur</p>
        </div>
      </section>
      <section className="contact-section">
        <h2 className="section-title">Follow Us</h2>
        <p>
          Stay connected with us through social media:
        </p>
        <ul className="social-media-list">
          <li><a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
