import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Let's Connect</h2>
      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Reach Me At</h3>
          <p>Email: yourname@email.com</p>
          <p>Location: Your City, Country</p>
          <div className="social-icons">
            <a href="..." target="_blank">
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
