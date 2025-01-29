import React, { useState } from "react";
import styles from "./Projects.module.css";
import ProjectsData from "./ProjectsData"; 

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

 
  const displayedProjects = showAll ? ProjectsData : ProjectsData.slice(0, 6);

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>MY PROJECTS</h2>
      <div className={styles.projectsContainer}>
        {displayedProjects.map(({ id, label, image, link, description }) => (
          <div key={id} className={styles.projectCard}>
            <img
              src={image}
              alt={label}
              className={styles.projectImage}
            />
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
          </div>
        ))}
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
