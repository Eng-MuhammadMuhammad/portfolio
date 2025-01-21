import React from "react";
import styles from "./Footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  // Get current month and year dynamically
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const formattedDate = `${month} / ${year}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.leftContent}>
        <p>Powered By Muhammad Muhammad © All Rights Reserved</p>
        <p className={styles.date}>{formattedDate}</p>
      </div>
      <div className={styles.rightContent}>
       
        <div className={styles.icons}>
        <p className={styles.contactLabel}>Contact Me:</p>

          <a
            href="https://www.facebook.com/profile.php?id=100035195543126"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
          </a>
          <a
            href="https://wa.me/00963992133889"
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
          <a
            href="tel:+00963992133889"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
