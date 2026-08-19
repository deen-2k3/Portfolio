import React from 'react';
import skills from './data/skills.json'

export default function Skills() {
  return (
    <div className="container skills" id="skills">
      <span className="section-label">Skills</span>
      <h2 className="section-title">Tools I work with</h2>
      <div className="items">
        {skills.map((data) => (
          <div
            className="item"
            key={data.title}
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <img src={`/assets/${data.imageSrc}`} alt="" />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
