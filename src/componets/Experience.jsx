import experienceData from "../Data/experienceData";
import React from "react";
import "./Experience.css"; // Ensure this is imported!

function Experience() {
  return (
    <div id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-scroll-container">
        {experienceData.map((job) => (
          <div className="job" key={job.id}>
            <h3>
              {job.role} – {job.company}
            </h3>
            <span className="duration">{job.duration}</span>
            <ul>
              {job.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
