import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import logo from '../../imgs/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (event, link) => {
    setIsMobileMenuOpen(false);
    if (link === 'home') {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
      event.preventDefault(); // Prevents the default anchor behavior
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <img
        src={logo}
        alt="Logo"
        className={styles.logo}
        onClick={() => window.location.reload()}
      />
      <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? 'X' : '☰'}
      </button>
      <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
        <ul className={styles.navLinks}>
          <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a></li>
          <li><a href="#about-me" onClick={handleLinkClick}>About</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#experiences" onClick={handleLinkClick}>Experiences</a></li>
          <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
