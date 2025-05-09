import React, { useState, useEffect } from "react";
import experienceData from "../Data/experienceData";
import "./Experience.css";

function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const goToPrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? experienceData.length - 1 : prev - 1
      );
      setIsFading(false);
    }, 300);
  };

  const goToNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === experienceData.length - 1 ? 0 : prev + 1
      );
      setIsFading(false);
    }, 300);
  };

  const currentJob = experienceData[currentIndex];

  return (
    <div id="experience" className="experience-carousel">
      <h2>Experience</h2>
      <div className="carousel-wrapper">
        <button className="carousel-button left" onClick={goToPrev}>
          &lt;
        </button>

        <div className={`job single-job ${isFading ? "fade" : "show"}`}>
          <p className="company">{currentJob.company}</p>
          <p className="role">{currentJob.role}</p>
          <span className="duration">{currentJob.duration}</span>
          <ul>
            {currentJob.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <button className="carousel-button right" onClick={goToNext}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Experience;
