import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div id="experience" className="experience">
      <div className="experience-content">
        <h2>Work Experience</h2>

        <div className="job">
          <h3>Backend Engineer – Missouri S&T</h3>
          <span className="duration">Aug 2024 – Dec 2024</span>
          <ul>
            <li>
              Built a secure mobile app with React Native, Firebase, and Spring
              Boot.
            </li>
            <li>
              Implemented JWT-based authentication and role-based user flow.
            </li>
            <li>
              Handled MySQL schema design, indexing, and CRUD operations using
              JPA.
            </li>
            <li>Dockerized backend services for streamlined deployment.</li>
          </ul>
        </div>

        <div className="job">
          <h3>Software Developer – Jumbotail</h3>
          <span className="duration">Sep 2021 – Dec 2022</span>
          <ul>
            <li>
              Developed APIs for credit line calculations in microservice
              architecture.
            </li>
            <li>Integrated WhatsApp Business API for automated alerts.</li>
            <li>
              Built a Job Scheduler for automated interest and data tasks.
            </li>
            <li>
              Improved performance and reliability with Kafka, Jenkins, and AWS
              tools.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
