import React, { useEffect, useRef } from "react";
import styles from "./Footer.module.css";
import "../Styles/Styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const footerRef = useRef(null);

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

    const currentFooter = footerRef.current;
    if (currentFooter) observer.observe(currentFooter);

    return () => {
      if (currentFooter) observer.unobserve(currentFooter);
    };
  }, []);

  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const formattedDate = `${month} / ${year}`;

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.leftContent}>
        <p>Powered By Muhammad Muhammad © All Rights Reserved</p>
        <p className={styles.date}>{formattedDate}</p>
      </div>
      <div className={styles.rightContent}>
        <p className={styles.contactLabel}>Contact Me:</p>
        <div className={styles.icons}>
          <a
            href="https://www.facebook.com/profile.php?id=100035195543126"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
          </a>
          <a
            href="https://wa.me/+963992133889"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-muhammad-217640173"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          </a>
          <a
            href="mailto:muhammadhaidarmuhammad@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          </a>
          <a href="tel:+963992133889" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
