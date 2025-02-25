import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import "../Styles/Styles.module.css";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateIn);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const currentForm = formRef.current;
    if (currentForm) observer.observe(currentForm);

    return () => {
      if (currentForm) observer.unobserve(currentForm);
    };
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill out all fields before sending.");
      return;
    }

    emailjs
      .send(
        "service_zqroxbt",
        "template_cxox12e",
        formData,
        "1zhBeaEHtZOMzd2XK"
      )
      .then((result) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        alert("Error sending message. Please try again.");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.sectionTitle}>Contact Me</h2>
      <div className={styles.contactContainer}>
        <form
          ref={formRef}
          className={styles.contactForm}
          onSubmit={handleSubmit}
        >
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              autoComplete="name"
              required 
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              autoComplete="email" 
              required 
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={styles.input}
              autoComplete="off"
              required 
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              autoComplete="off" 
              required 
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </form>
        <div className={styles.contactInfo}>
          <p>
            Have an idea and need a developer to bring it to life? Feel free to
            contact me{" "}
            <span className={styles.boldText}>
              or directly by filling out the form
            </span>
          </p>
          <ul className={styles.contactDetails}>
            <li>
              <span className={styles.icon}>📧</span>{" "}
              muhammadhaidarmuhammad@gmail.com
            </li>
            <li>
              <span className={styles.icon}>📞</span> +963992133889
            </li>
            <li>
              <span className={styles.icon}>💬</span> +963992133889
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
