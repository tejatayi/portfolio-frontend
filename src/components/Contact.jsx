import React, { useRef, useState } from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // First email to YOU
    try {
      await emailjs.sendForm(
        "service_portfolio",
        "template_to_owner",
        formRef.current,
        "2nq9Dw2DzDVrFiivO"
      );
      console.log("✅ Sent to you");
    } catch (error) {
      console.error("❌ Failed to send to owner:", error);
    }

    // Then auto-reply to visitor
    try {
      await emailjs.sendForm(
        "service_portfolio",
        "template_auto_reply",
        formRef.current,
        "2nq9Dw2DzDVrFiivO"
      );
      setStatus("✅ Message sent");
      e.target.reset();
    } catch (error) {
      console.error("Failed to send ", error);
      setStatus("Message sent to me, but auto-reply failed.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Let's Connect</h2>
      <div className="contact-container">
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="title" placeholder="Subject" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />
          <button type="submit">Send Message</button>
          {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
        </form>

        <div className="contact-info">
          <h3>Reach Me At</h3>
          <p>Email: saisivatejatayi@gmail.com</p>
          <p>Location: United States</p>
          <div className="social-icons">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/tejatayi"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
