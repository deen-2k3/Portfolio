import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <div className="container ex" id="experience">
      <span className="section-label">Experience</span>
      <h2 className="section-title">Where I've worked</h2>
      {experience.map((data) => (
        <div
          key={data.id}
          className="ex-items"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="left">
            <img src={`/assets/${data.imageSrc}`} alt="" />
          </div>
          <div className="right">
            <h2>{data.role}</h2>
            <div className="meta">
              {data.organisation} · {data.startDate} – {data.endDate} ·{" "}
              {data.location}
            </div>
            {data.experiences.map((line, i) => (
              <p className="detail" key={i}>
                {line}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
