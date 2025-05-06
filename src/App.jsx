import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="app-container">
      <nav className="navigation-bar">
        <ul>
          <li>
            <a href="#intro">Introduction</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="section-container">
        <div id="intro" className="intro">
          <p>Hi This is Teja, Software developer</p>
        </div>
        <div id="experience" className="experience">
          <p>This is Experience section</p>
        </div>
        <div id="projects" className="projects">
          <p>This is Projects section</p>
        </div>
        <div id="contact" className="contact">
          <p>This is Contact section</p>
        </div>
      </div>
    </div>
  );
}

export default App;
