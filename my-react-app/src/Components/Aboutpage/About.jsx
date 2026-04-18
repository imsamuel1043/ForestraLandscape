import React from "react";
import "../../assets/Css/About.css";
import aboutheroimg from "../../assets/Img/aboutherobg.jpg";
import Aboutsec1 from "./Aboutsec1";
import Mission from "./Mission";

const About = () => {
    return (

        <>
        <section 
            className="about-hero"
            style={{ backgroundImage: `url(${aboutheroimg})` }}
        >

            {/* Overlay */}
            <div className="about-overlay"></div>

            <div className="container">

                <div className="about-hero-content">

                    {/* Breadcrumb */}
                    <p className="about-breadcrumb">
                        Home <span>|</span> About
                    </p>

                    {/* Title */}
                    <h2 className="about-hero-title">
                        ABOUT US
                    </h2>

                </div>

            </div>

        </section>
        
        <Aboutsec1/>
        <Mission/>
        
        </>
    );
};

export default About;