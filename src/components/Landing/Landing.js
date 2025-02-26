import React, { useEffect, useRef } from "react";
import styles from "./Landing.module.css";
import "../Styles/Styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  const landingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateIn);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentLanding = landingRef.current;
    if (currentLanding) observer.observe(currentLanding);

    return () => {
      if (currentLanding) observer.unobserve(currentLanding);
    };
  }, []);

  const name = "Muhammad Muhammad";
  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];

  return (
    <section ref={landingRef} className={styles.landingSection}>
      <div className={styles.container}>
        <h2 className={styles.name}>
          <span className={styles.firstName}>{firstName}</span>
          <span className={styles.lastName}>{lastName}</span>
        </h2>
        <p className={styles.title}>Software Engineer</p>
        <p className={styles.title}>React JS - Frontend Dev</p>
        <div className={styles.socialIcons}>
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
    </section>
  );
};

export default Landing;
