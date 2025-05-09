import React, { useState, useRef, useEffect } from "react";
import experienceData from "../Data/experienceData";
import "./Experience.css";

function Experience() {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => setExpanded(true);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        expanded &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setExpanded(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  return (
    <section className="experience-section">
      {!expanded && (
        <div className="intro-wrapper" onClick={handleExpand}>
          <div className="intro-card">
            <p className="exp">Experience</p>
          </div>
        </div>
      )}

      {expanded && (
        <div className="stack-wrapper expanded" ref={wrapperRef}>
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
      )}
    </section>
  );
}

export default Experience;
