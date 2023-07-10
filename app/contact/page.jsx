"use client";
import React, { useState } from 'react';
import styles from '@/app/styles/ContactUs.module.css';

const page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted');
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <>
      <div className={styles.contactUsPage}>
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! If you have any questions, feedback, or
        inquiries, feel free to reach out to us using the contact details
        provided below. Our dedicated support team is ready to assist you.
      </p>

      <div className={styles.contactInfo}>
        <div className={styles.infoSection}>
          <h2>Customer Support</h2>
          <p>
            For any assistance or queries regarding your orders, returns, or
            general inquiries, our customer support team is available to help.
          </p>
          <ul>
            <li>
              <strong>Email:</strong> support@fashioncodes.com
            </li>
            <li>
              <strong>Phone:</strong> +1 123-456-7890
            </li>
            <li>
              <strong>Working Hours:</strong> Monday - Friday, 9am - 5pm
            </li>
          </ul>
        </div>

        <div className={styles.infoSection}>
          <h2>Wholesale Inquiries</h2>
          <p>
            If you are interested in wholesale opportunities or partnership
            inquiries, please get in touch with our wholesale team.
          </p>
          <ul>
            <li>
              <strong>Email:</strong> wholesale@fashioncodes.com
            </li>
            <li>
              <strong>Phone:</strong> +1 987-654-3210
            </li>
            <li>
              <strong>Working Hours:</strong> Monday - Friday, 9am - 5pm
            </li>
          </ul>
        </div>

        <div className={styles.infoSection}>
          <h2>Media & Press</h2>
          <p>
            For media inquiries, press releases, or any media-related matters,
            please reach out to our media relations team.
          </p>
          <ul>
            <li>
              <strong>Email:</strong> media@fashioncodes.com
            </li>
            <li>
              <strong>Phone:</strong> +1 555-123-4567
            </li>
            <li>
              <strong>Working Hours:</strong> Monday - Friday, 9am - 5pm
            </li>
          </ul>
        </div>

        <div className={styles.infoSection}>
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjrCsDI4JzE5LjYiTiA3NMKwMDcnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
          title="Fashioncodes Location"
          allowFullScreen
          loading="lazy"
          className={styles.map}
        ></iframe>
      </div>
    </div>
    </>
  );
}

export default page;
