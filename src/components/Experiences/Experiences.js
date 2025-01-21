import React, { useEffect, useRef } from 'react';
import styles from './Experiences.module.css';
import { FaBriefcase, FaBuilding, FaCalculator } from 'react-icons/fa';

const experiences = [
  {
    date: "Dec 2024 - Jan 2025",
    company: "Stolen Bikes Investigation | SBI",
    duration: "1 Months",
    location: "Damascus, Syria",
    role: "React Frontend Dev - Layouts Designer(UI/UX)",
    description: "Stolen Bikes Investigation (SBI): A web app built with React and Node.js for reporting and managing stolen bike cases, enabling users to report thefts and police to efficiently track and resolve investigations.",
    skills: "API Handeling ,UI/UX Design, React.js, Web Development, JavaScript, CSS, HTML",
    icon: <FaBriefcase />
  },
  {
    date: "Aug 2024 - Oct 2024",
    company: "Modern Shopping | Light Store",
    duration: "2 Months",
    location: "Damascus, Syria",
    role: "UI/UX Designer & Front-End Developer",
    description: "Worked on a modern shopping platform for light products, optimizing the UI and implementing features for better product browsing and purchasing. Collaborated with back-end teams to integrate APIs.",
    skills: "E-commerce, UI/UX Design, React.js, Web Development, JavaScript, CSS, HTML",
    icon: <FaCalculator />
  },
  {
    date: "May 2024 - Jul 2024",
    company: "Todo Application",
    duration: "2 Months",
    location: "Damascus, Syria",
    role: "UI/UX Designer & Front-End Developer",
    description: "Developed a task management application with an emphasis on ease of use and responsiveness. Used React.js to build a dynamic and user-friendly platform for managing personal and team tasks.",
    skills: "React.js, UI/UX Design, JavaScript, CSS, HTML",
    icon: <FaBuilding />
  },
  {
    date: "Jan 2024 - Apr 2024",
    company: "Clothes Store | Men & Women",
    duration: "4 Months",
    location: "Damascus, Syria",
    role: "UI/UX Designer & Front-End Developer",
    description: "Designed and developed an e-commerce platform for a clothing store, creating an intuitive shopping experience with modern design trends. Implemented React.js and integrated payment solutions for smooth transactions.",
    skills: "E-commerce, React.js, Web Design, CSS, HTML, User Interface, JavaScript",
    icon: <FaBriefcase />
  },
  {
    date: "Jul 2023 - Dec 2023",
    company: "Innovative Syrian Solutions",
    duration: "6 Months",
    location: "Aleppo, Syria",
    role: "UI/UX Designer & Front-End Developer",
    description: "Worked on designing responsive and accessible user interfaces for various projects, including e-commerce and corporate websites. Focused on optimizing the design to enhance user experience, collaborating with teams to ensure seamless delivery of high-quality solutions.",
    skills: "UI/UX Design, React.js, HTML, CSS, Prototyping, E-commerce, Figma",
    icon: <FaCalculator />
  },
  {
    date: "Jan 2023 - Jun 2023",
    company: "Syrian Tech Solutions",
    duration: "6 Months",
    location: "Damascus, Syria",
    role: "UI/UX Designer & Front-End Developer",
    description: "Led the design and development of several projects, focusing on creating modern, user-friendly interfaces. Collaborated with backend developers to integrate API services into user-facing applications, improving functionality and user experience.",
    skills: "UI/UX Design, React.js, Front-End Development, Web Development, Figma, Sketch",
    icon: <FaBuilding />
  },
  {
    date: "Oct 2022 - Nov 2023",
    company: "NTT Data Business Solution",
    duration: "1 Year 1 Month",
    location: "Remote (Germany)",
    role: "UI/UX Designer & Front-End Developer",
    description: "Designed and developed user-centric websites, focusing on usability, accessibility, and aesthetics. Created wireframes, mockups, and prototypes to communicate design concepts. Implemented front-end features using HTML, CSS, JavaScript, and React.js. Conducted user research and testing to improve user experience, collaborating closely with designers, developers, and project managers to deliver high-quality solutions.",
    skills: "UI/UX Design, Front-End Development, HTML, CSS, JavaScript, React.js, Prototyping, User Research, Accessibility",
    icon: <FaBriefcase />
  }
];

const Experiences = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const currentItems = itemsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    currentItems.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      currentItems.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div id='experiences' className={styles.experiences}>
      <h2 className={styles.heading}>EXPERIENCES</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={styles.experienceItem}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <div className={styles.date}>{exp.date}</div>
            <div className={styles.icon}>{exp.icon}</div>
            <div className={styles.details}>
              <h3 className={styles.company}>{exp.company}</h3>
              <p className={styles.duration}>{exp.duration} - {exp.location}</p>
              <p className={styles.role}>{exp.role}</p>
              <p className={styles.description}>{exp.description}</p>
              <p className={styles.skills}>Skills: {exp.skills}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
