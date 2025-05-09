import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ShootingStars from "./shootingStars";
import "./App.css";
import Experience from "./components/Experience";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="app-container">
      <ShootingStars />
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
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="section-container">
        <div id="intro" className="intro">
          <h1 className="typing">
            <span className="echo">$ echo </span>
            <span className="highlight">"Hi</span>, I'm{" "}
            <span className="highlight">Teja"</span>
          </h1>
          <p className="fade-in">
            I got into software development as I love solving real-world
            problems with code. <br />
            I’ve worked on everything from mobile apps to backend systems, and
            I’m always looking to learn more and build better.
          </p>
        </div>
        <div id="experience" className="experience">
          <Experience />
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
