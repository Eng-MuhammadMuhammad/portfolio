import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import "../Styles/Styles.module.css";

const AboutMe = () => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);

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
    animateCounter(setProjectsCount, 10);
    animateCounter(setCustomersCount, 4);
    animateCounter(setExperienceCount, 4);
  }, []);

  // AboutMe.js
  return (
    <div id="about-me" className={styles.aboutContainer}>
      <h2 className={styles.title}>ABOUT ME</h2>
      <div className={styles.aboutcontents}>
        <div className={styles.infoSection}>
          <h4>Personal Info :</h4>
          <p>My name is Mohammad Mohammad from Syria.</p>
          <p>
            I am a software engineer with +2 years experience in web development Specialised in React JS
            ,UI/UX designing (Figma). {" "}
            <b>I enjoy my work because it is my passion.</b>
          </p>

          <h4>Education :</h4>
          <p>
            Bachelor's degree, Software Engineering From Al-Baath University In
            Syria 2017 - 2022.
          </p>
          <p>
          Academic Master in Web Science(MWS).Syrian Virtual University, 10/23 – Now.
          </p>
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{projectsCount}+</div>
            <div className={styles.statLabel}>PROJECTS</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{customersCount}+</div>
            <div className={styles.statLabel}>CUSTOMERS</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{experienceCount}+</div>
            <div className={styles.statLabel}>EXPERIENCE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
