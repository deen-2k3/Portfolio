import React from "react";
import services from "./data/services.json";

export default function Services() {
  return (
    <div className="container services" id="services">
      <span className="section-label">Services</span>
      <h2 className="section-title">What I can build for you</h2>
      <div className="grid">
        {services.map((s) => (
          <div
            className="service-card"
            key={s.title}
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="icon-badge">
              <img src={`/assets/${s.imageSrc}`} alt="" />
            </div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            {s.modules && (
              <div className="module-tags">
                {s.modules.map((m) => (
                  <span className="module-tag" key={m}>{m}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
