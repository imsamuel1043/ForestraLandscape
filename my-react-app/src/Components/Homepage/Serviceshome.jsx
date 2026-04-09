import React from 'react'
import "../../assets/Css/Home.css";


import Hardscaping from "../../assets/Img/Hardscaping.jpeg";
import VerticalGarden from "../../assets/Img/VerticalGarden.jpg";
import LawnCare from "../../assets/Img/LawnCare.jpg";
import LandscapeDesign from "../../assets/Img/LandscapeDesign.jpg";

const Serviceshome = () => {
    return (
        <>
            {/* Services */}
            <section id="services" className="services-section py-5">
                <div className="container text-center">

                    <span className="values-tag" data-aos="fade-up" >[ OUR SERVICES ]</span>
                    <h2 className="values-title mt-3" data-aos="fade-up" >
                        Designing Your Spaces With <br /> <span>Beauty & Function</span>
                    </h2>
                    <p className="section-subtitle mb-5" data-aos="fade-up">
                        We create stunning landscapes and plant solutions that enhance your space,<br />
                        improve usability, and bring nature closer to everyday living
                    </p>

                    <div className="row g-4">

                        {[
                            {
                                name: "Landscape Design",
                                img: LandscapeDesign
                            },
                            {
                                name: "Lawn Care",
                                img: LawnCare
                            },
                            {
                                name: "Vertical Garden",
                                img: VerticalGarden
                            },
                            {
                                name: "Hardscaping",
                                img: Hardscaping
                            }
                        ].map((s, i) => (

                            <div
                                className="col-lg-3 col-md-6"
                                key={i}
                                data-aos="zoom-in"
                                data-aos-delay={i * 100}
                            >
                                <div
                                    className="service-card"
                                    style={{ backgroundImage: `url(${s.img})` }}
                                >

                                    <div className="service-overlay"></div>

                                    <div className="service-content">
                                        <h5>{s.name}</h5>
                                        <p>
                                            Premium {s.name.toLowerCase()} solutions crafted for modern outdoor living.
                                        </p>
                                        <span className="service-link">Explore →</span>
                                    </div>

                                </div>
                            </div>

                        ))}

                    </div>
                </div>
            </section>

        </>
    )
}

export default Serviceshome