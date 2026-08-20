import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "../components/Home";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <>
      <Home />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
