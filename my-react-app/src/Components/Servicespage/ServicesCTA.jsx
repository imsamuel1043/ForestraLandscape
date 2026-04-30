import React from "react";
import "../../assets/Css/Services.css";

const ServicesCTA = () => {
  return (
    <section className="services-cta text-center py-5">
      <div className="container">

        <h2>Ready to Transform Your Space?</h2>
        <p>Let’s create something beautiful together.</p>

        <a href="/contact" className="btn nav-cta-btn">
          Get Started
        </a>

      </div>
    </section>
  );
};

export default ServicesCTA;