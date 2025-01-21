import React from 'react';
import styles from './Services.module.css';
import { FaLaptopCode, FaAppStore, FaPenNib, FaCloud, FaUsers, FaDatabase } from 'react-icons/fa';

const Services = () => {
    return (
        <section id='services' className={styles.services}>
            <h2 className={styles.title}>SERVICES</h2>
            <div className={styles.serviceItems}>
                {/* Web Development Service */}
                <div className={`${styles.serviceItem} ${styles.animate}`}>
                    <div className={styles.icon}><FaLaptopCode size={30} /></div>
                    <h3 className={styles.heading}>Web Development</h3>
                    <p className={styles.description}>
                        As a React.js developer, I specialize in building dynamic and responsive websites using modern JavaScript frameworks. I focus on writing clean, scalable code that delivers high performance across devices and browsers.
                    </p>
                </div>

                {/* Mobile App Development Service */}
                <div className={`${styles.serviceItem} ${styles.animate}`}>
                    <div className={styles.icon}><FaAppStore size={30} /></div>
                    <h3 className={styles.heading}>Mobile App Development</h3>
                    <p className={styles.description}>
                        I create seamless, native-like mobile applications with React Native. These apps are fast, intuitive, and built to scale, ensuring great user experiences across both iOS and Android platforms.
                    </p>
                </div>

                {/* UI/UX Design Service */}
                <div className={`${styles.serviceItem} ${styles.animate}`}>
                    <div className={styles.icon}><FaPenNib size={30} /></div>
                    <h3 className={styles.heading}>UI/UX Design</h3>
                    <p className={styles.description}>
                        I design user-centric interfaces that prioritize accessibility, usability, and aesthetics. My goal is to deliver engaging and intuitive designs that make your website or app easy to navigate and visually appealing.
                    </p>
                </div>

                {/* Cloud Integration Service */}
                <div className={`${styles.serviceItem} ${styles.animate}`}>
                    <div className={styles.icon}><FaCloud size={30} /></div>
                    <h3 className={styles.heading}>Cloud Integration</h3>
                    <p className={styles.description}>
                        I help businesses leverage cloud technologies by integrating scalable, secure cloud solutions into web applications. From cloud storage to real-time data syncing, I ensure your app is future-ready.
                    </p>
                </div>

                {/* API Development Service */}
                <div className={`${styles.serviceItem} ${styles.animate}`}>
                    <div className={styles.icon}><FaDatabase size={30} /></div>
                    <h3 className={styles.heading}>API Development</h3>
                    <p className={styles.description}>
                        I specialize in building and integrating robust APIs that facilitate smooth communication between your web app and other services. Whether you need RESTful APIs or GraphQL, I ensure high performance and security.
                    </p>
                </div>

                {/* User Authentication & Security Service */}
                <div className={`${styles.serviceItem} ${styles.animate}`}>
                    <div className={styles.icon}><FaUsers size={30} /></div>
                    <h3 className={styles.heading}>User Authentication & Security</h3>
                    <p className={styles.description}>
                        I implement secure user authentication systems, ensuring your applications are protected from security threats. From password encryption to multi-factor authentication, I prioritize user privacy and data security.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
