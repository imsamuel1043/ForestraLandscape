import React from "react";
import "../../assets/Css/Contact.css";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>
            Let’s bring your outdoor vision to life with beautiful landscape
            solutions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Have a project in mind? Reach out to us for landscaping,
            hardscaping, garden design, maintenance, and more.
          </p>

          <div className="info-box">
            <h4>📍 Address</h4>
            <p> Wayanad, Kerala, India</p>
          </div>

          <div className="info-box">
            <h4>📞 Phone</h4>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <h4>✉ Email</h4>
            <p>info@landscape.com</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form">
          <form>
            <div className="input-group">
              <input type="text" placeholder="Your Name" required />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Your Email" required />
            </div>

            <div className="input-group">
              <input type="text" placeholder="Subject" required />
            </div>

            <div className="input-group">
              <textarea
                rows="6"
                placeholder="Write Your Message"
                required
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;