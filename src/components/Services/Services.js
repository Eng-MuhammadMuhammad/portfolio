import React, { useEffect, useRef } from "react";
import styles from "./Services.module.css";
import "../Styles/Styles.module.css";
import {
  FaLaptopCode,
  FaAppStore,
  FaPenNib,
  FaCloud,
  FaUsers,
  FaDatabase,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={30} />,
    title: "Web Development",
    description:
      "As a React.js developer, I specialize in building dynamic and responsive websites using modern JavaScript frameworks. I focus on writing clean, scalable code that delivers high performance across devices and browsers.",
  },
  {
    icon: <FaAppStore size={30} />,
    title: "Mobile App Development",
    description:
      "I create seamless, native-like mobile applications with React Native. These apps are fast, intuitive, and built to scale, ensuring great user experiences across both iOS and Android platforms.",
  },
  {
    icon: <FaPenNib size={30} />,
    title: "UI/UX Design",
    description:
      "I design user-centric interfaces that prioritize accessibility, usability, and aesthetics. My goal is to deliver engaging and intuitive designs that make your website or app easy to navigate and visually appealing.",
  },
  {
    icon: <FaCloud size={30} />,
    title: "Cloud Integration",
    description:
      "I help businesses leverage cloud technologies by integrating scalable, secure cloud solutions into web applications. From cloud storage to real-time data syncing, I ensure your app is future-ready.",
  },
  {
    icon: <FaDatabase size={30} />,
    title: "API Development",
    description:
      "I specialize in building and integrating robust APIs that facilitate smooth communication between your web app and other services. Whether you need RESTful APIs or GraphQL, I ensure high performance and security.",
  },
  {
    icon: <FaUsers size={30} />,
    title: "User Authentication & Security",
    description:
      "I implement secure user authentication systems, ensuring your applications are protected from security threats. From password encryption to multi-factor authentication, I prioritize user privacy and data security.",
  },
];

const Services = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateIn);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const currentItems = itemsRef.current;

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
    <section id="services" className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Services</h2>
      <div className={styles.serviceGrid}>
        {services.map((service, index) => (
          <article
            key={index}
            className={styles.serviceCard}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <div className={styles.cardIcon}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
