import React from 'react'
import project from './data/project.json'

export default function Projects() {
  return (
    <div className="container projects" id="projects">
      <span className="section-label">Projects</span>
      <h2 className="section-title">Latest work</h2>
      <div className="project-list">
        {project.map((data, i) => (
          <div
            key={data.key}
            className={`project-item ${i % 2 === 1 ? "reverse" : ""}`}
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="laptop-frame">
              <div className="screen">
                <img src={`/assets/${data.imageSrc}`} alt={data.title} />
              </div>
              <div className="base" />
            </div>
            <div>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
              <div className="links">
                <a href={data.demo} target="_blank" rel="noopener noreferrer" className="pill-btn small">
                  Demo
                </a>
                <a href={data.source} target="_blank" rel="noopener noreferrer" className="pill-btn small outline">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
