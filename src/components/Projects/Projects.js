import React, { useState, useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import "../Styles/Styles.module.css";
import ProjectsData from "./ProjectsData";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projectsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateIn);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const currentProjects = projectsRef.current;
    currentProjects.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      currentProjects.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [showAll]);

  const displayedProjects = showAll ? ProjectsData : ProjectsData.slice(0, 8);

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>My Projects</h2>
      <div className={styles.projectsContainer}>
        {displayedProjects.map(
          ({ id, label, image, link, description }, index) => (
            <article
              key={id}
              className={styles.projectCard}
              ref={(el) => (projectsRef.current[index] = el)}
            >
              <img src={image} alt={label} className={styles.projectImage} />
              <div className={styles.projectOverlay}>
                <h3 className={styles.projectTitle}>{label}</h3>
                <p className={styles.projectDescription}>{description}</p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectButton}
                >
                  View Project
                </a>
              </div>
            </article>
          )
        )}
      </div>
      <div className={styles.viewAllButtonContainer}>
        <button
          onClick={() => setShowAll(!showAll)}
          className={styles.viewAllButton}
        >
          {showAll ? "Show Less" : "View All Projects"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
