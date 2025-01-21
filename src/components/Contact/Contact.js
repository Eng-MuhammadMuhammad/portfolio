import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';
import '../Styles/Styles.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill out all fields before sending.');
      return;
    }

    emailjs.send(
      'service_zqroxbt', 
      'template_cxox12e', 
      formData,
      '1zhBeaEHtZOMzd2XK' 
    )
    .then((result) => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    })
    .catch((error) => {
      alert('Error sending message. Please try again.');
      console.error('EmailJS Error:', error);
    });
  };

  return (
    <div id='contact' className={styles.contactContainer}>
      <h2 className={styles.title}>CONTACT ME</h2>
      <div className={styles.contactContent}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
            ></textarea>
          </div>
          <button type="submit" className={styles.button}>Send</button>
        </form>
        <div className={styles.contactInfo}>
        <p>You have an idea and need a developer to bring it to life ? feel free to contact me | <span className={styles.boldText}>OR directly by filling out the form below</span></p>

          <ul className={styles.contactDetails}>
            <li><span className={styles.icon}>📧</span> muhammadhaidarmuhammad@gmail.com</li>
            <li><span className={styles.icon}>📞</span> +963992133889</li>
            <li><span className={styles.icon}>💬</span> +963992133889</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
