import React from "react";
import experienceData from "../Data/experienceData";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section">
      <h2 className="exp-title">Experience</h2>
      <div className="stack-wrapper expanded">
        {experienceData.map((item, idx) => (
          <div
            key={item.id}
            className="card fan-out"
            style={{ zIndex: experienceData.length - idx }}
          >
            <p className="company">{item.company}</p>
            <p className="role">{item.role}</p>
            <p className="duration">{item.duration}</p>
            <ul>
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
