// App.js
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Allprojects from "./components/Allprojects/Allprojects"; // Import Allprojects
import Experiences from "./components/Experiences/Experiences";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Landing />
      <About />
      <Projects />
      <Experiences />
      <Services />
      <Contact />
      <Allprojects />
      <Footer />
    </div>
  );
}

export default App;
