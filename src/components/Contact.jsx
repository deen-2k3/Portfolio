import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/deen_bandhu36/" target="_blank" rel="noopener noreferrer" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/deen-bandhu-singh-684637232/" target="_blank" rel="noopener noreferrer" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="items">
            <FaTwitterSquare className="icons" />
          </a>
          <a href="https://github.com/deen-2k3" target="_blank" rel="noopener noreferrer" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="mailto:deenbandhusingh335@gmail.com" target="_blank" rel="noopener noreferrer" className="items">
            <SiGmail className="icons" />
          </a>
        </div>
      </div> 
    </>
  )
}
