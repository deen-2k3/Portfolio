import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Feedback from "./components/Feedback";
import Contact from './components/Contact'
import Aos from "aos";
import "aos/dist/aos.css"


const App = () => {
 useEffect(() => {
  Aos.init({ once: true });
 }, [])

  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <Feedback />
      <Contact />
    </>
  );
};

export default App;