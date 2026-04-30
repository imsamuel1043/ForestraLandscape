import React from "react";
import servicesbg from "../../assets/Img/servicesbg.webp";
import "../../assets/Css/Services.css";

import aboutheroimg from "../../assets/Img/aboutherobg.jpg";
import ServicesIntro from "./ServicesIntro";
import ServicesGrid from "./ServicesGrid";
import ServicesProcess from "./ServicesProcess";
import ServicesCTA from "./ServicesCTA";

const Services = () => {
  return (

    <>
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${servicesbg})` }}
      >

        {/* Overlay */}
        <div className="services-overlay"></div>

        <div className="container">

          <div className="services-hero-content">

            {/* Breadcrumb */}
            <p className="services-breadcrumb">
              Home <span>|</span> About
            </p>

            {/* Title */}
            <h2 className="services-hero-title">
              OUR SERVICES
            </h2>

          </div>

        </div>

      </section>

      <ServicesIntro />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesCTA />

    </>
  );
};

export default Services;