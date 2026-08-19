import React from "react";
import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container home" id="home">
      <div className="hero-card" data-aos="fade-up" data-aos-duration="800">
        <span className="script">Building Products, Solving Problems.</span>
        <h1 className="headline">
          Hey, I'm Deen Bandhu —<br />
          Your MERN &amp; Business Central Developer!
        </h1>

        <div className="socials">
          <a href="https://www.instagram.com/deen_bandhu36/" target="_blank" rel="noopener noreferrer" style={{ background: "var(--pink)" }}>
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/deen-bandhu-singh-684637232/" target="_blank" rel="noopener noreferrer" style={{ background: "var(--sky)" }}>
            <FaLinkedin />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ background: "var(--lavender)" }}>
            <FaTwitter />
          </a>
          <a href="https://github.com/deen-2k3" target="_blank" rel="noopener noreferrer" style={{ background: "var(--mint)" }}>
            <FaGithub />
          </a>
        </div>

        <a href="mailto:deenbandhusingh335@gmail.com" className="email-line">
          deenbandhusingh335@gmail.com
        </a>

        <div className="cta-row">
          <a href="#projects" className="pill-btn">See my work</a>
          <a href="#contact" className="pill-btn outline">Contact</a>
          <a href={pdf} download="Resume.pdf" className="pill-btn outline">Resume</a>
        </div>

        <div className="avatar-wrap">
          <div className="blob" style={{ width: 220, height: 220, background: "var(--pink)", left: "calc(50% - 150px)", top: -10 }} />
          <div className="blob" style={{ width: 160, height: 160, background: "var(--lavender)", left: "calc(50% + 40px)", top: 40 }} />
          <div className="dot" style={{ width: 18, height: 18, background: "var(--accent)", left: "calc(50% - 140px)", top: 60 }} />
          <div className="dot" style={{ width: 12, height: 12, background: "var(--fg)", left: "calc(50% + 130px)", top: 30 }} />
          <div className="avatar-photo">
            <img src={`/assets/${hero.imgSrc}`} alt="Deen Bandhu Singh" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
