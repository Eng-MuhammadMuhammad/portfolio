import React, { useEffect, useState, useRef } from "react";
import styles from "./About.module.css";
import "../Styles/Styles.module.css";

const AboutMe = () => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const aboutRef = useRef(null);

  const animateCounter = (setter, target) => {
    let count = 0;
    const increment = target / 100;
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        clearInterval(interval);
        setter(target);
      } else {
        setter(Math.floor(count));
      }
    }, 20);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateIn);
            animateCounter(setProjectsCount, 10);
            animateCounter(setCustomersCount, 4);
            animateCounter(setExperienceCount, 4);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const currentAbout = aboutRef.current;
    if (currentAbout) observer.observe(currentAbout);

    return () => {
      if (currentAbout) observer.unobserve(currentAbout);
    };
  }, []);

  return (
    <section id="about-me" ref={aboutRef} className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.aboutContainer}>
        <div className={styles.infoSection}>
          <h4 className={styles.infoTitle}>Personal Info:</h4>
          <p>My name is Mohammad Mohammad from Syria.</p>
          <p>
            I am a software engineer with over 2 years of experience in web
            development, specializing in React JS and UI/UX designing (Figma).{" "}
            <span className={styles.boldText}>
              I enjoy my work because it is my passion.
            </span>
          </p>
          <h4 className={styles.infoTitle}>Education:</h4>
          <p>
            Bachelor's degree in Software Engineering from Al-Baath University,
            Syria (2017 - 2022).
          </p>
          <p>
            Academic Master in Web Science (MWS), Syrian Virtual University
            (10/23 – Present).
          </p>
        </div>
        <div className={styles.statsSection}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{projectsCount}+</div>
            <div className={styles.statLabel}>Projects</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{customersCount}+</div>
            <div className={styles.statLabel}>Customers</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{experienceCount}+</div>
            <div className={styles.statLabel}>Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
