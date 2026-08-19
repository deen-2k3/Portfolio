import React from 'react'

export default function Navbar() {
  return (
    <div
      className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <a href="#home" className="left nav_items">Deen Bandhu..</a>
      <div className="right">
        <a href="#projects" className="nav_items">Projects</a>
        <a href="#services" className="nav_items">Services</a>
        <a href="#skills" className="nav_items">Skills</a>
        <a href="#contact" className="pill-btn small">Let's Talk</a>
      </div>
    </div>
  )
}
