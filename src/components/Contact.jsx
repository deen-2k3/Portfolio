import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container contact" id="contact">
      <div className="cta-card" data-aos="fade-up" data-aos-duration="800">
        <span className="section-label">Contact</span>
        <h2>Let's build something together</h2>
        <p>
          Available for freelance MERN and Business Central projects.
          Send me an email and let's talk about what you're building.
        </p>
        <a href="mailto:deenbandhusingh335@gmail.com" className="pill-btn" style={{ background: "var(--accent)", borderColor: "var(--accent)" }}>
          deenbandhusingh335@gmail.com
        </a>

        <div className="contact-icon">
          <a href="https://www.instagram.com/deen_bandhu36/" target="_blank" rel="noopener noreferrer" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="items">
            <FaFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/deen-bandhu-singh-684637232/" target="_blank" rel="noopener noreferrer" className="items">
            <FaLinkedin className="icons" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="items">
            <FaTwitter className="icons" />
          </a>
          <a href="https://github.com/deen-2k3" target="_blank" rel="noopener noreferrer" className="items">
            <FaGithub className="icons" />
          </a>
        </div>
      </div>

      <div className="footer-meta">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <span>© {new Date().getFullYear()} Deen Bandhu Singh</span>
      </div>
    </div>
  )
}
