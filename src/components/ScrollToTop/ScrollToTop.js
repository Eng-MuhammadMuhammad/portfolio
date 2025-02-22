import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ScrollToTop.module.css";
import "../Styles/Styles.module.css";

const ScrollToTop = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  const useScrollListener = (threshold = 300) => {
    useEffect(() => {
      let timeoutId;
      const handleScroll = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsVisible(window.scrollY > threshold);
        }, 100);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(timeoutId);
      };
    }, [threshold]);
  };

  useScrollListener(300);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={styles.scrollButton}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <svg
            className={styles.arrow}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
          <span className={styles.tooltip}>Back to Top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
});

ScrollToTop.displayName = "ScrollToTop";

export default ScrollToTop;
