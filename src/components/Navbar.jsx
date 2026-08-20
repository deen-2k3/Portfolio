import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div
      className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <Link to="/#home" className="left nav_items">Deen Bandhu..</Link>
      <div className="right">
        <Link to="/#projects" className="nav_items">Projects</Link>
        <Link to="/#services" className="nav_items">Services</Link>
        <Link to="/#skills" className="nav_items">Skills</Link>
        <Link to="/#contact" className="pill-btn small">Let's Talk</Link>
      </div>
    </div>
  )
}
