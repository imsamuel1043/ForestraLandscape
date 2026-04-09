import React, { useEffect } from 'react';
import "../../assets/Css/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Valuehome = () => {

    useEffect(() => {
        AOS.init({ duration: 1200, once: true, easing: "ease-out-cubic" });
    }, []);

    const values = [
        {
            title: "Quality Craftsmanship",
            icon: "bi-shield-check",
            desc: "Precision-built landscapes with refined attention to every detail."
        },
        {
            title: "Eco-Friendly Practices",
            icon: "bi-leaf",
            desc: "Sustainable design that respects nature and enhances ecosystems."
        },
        {
            title: "Client-Centered Approach",
            icon: "bi-people",
            desc: "Every space is tailored to your vision and lifestyle."
        },
        {
            title: "Timely Execution",
            icon: "bi-clock",
            desc: "Efficient delivery with uncompromised quality."
        }
    ];

    return (
        <section className="values-section ultra py-5">

            <div className="container">

                {/* Header */}
                <div className="text-center mb-5">
                    <span className="values-tag" data-aos="fade-up">
                        [ OUR VALUES ] 
                    </span>

                    <h2 className="values-title mt-3" data-aos="fade-up">
                        Designing Nature With <span>Elegance & Intent</span>
                    </h2>

                    <p className="values-subtitle mx-auto" data-aos="fade-up">
                        We combine innovation, sustainability, and craftsmanship to create immersive landscape experiences.
                    </p>
                </div>

                {/* Cards */}
                <div className="row g-4">

                    {values.map((item, i) => (
                        <div className="col-md-6 col-lg-3" key={i} data-aos="fade-up">

                            <div className="value-card ultra-card">

                                {/* Glow */}
                                <div className="card-glow"></div>

                                {/* Icon */}
                                <div className="icon-box ultra-icon">
                                    <i className={`bi ${item.icon}`}></i>
                                </div>

                                {/* Content */}
                                <h5 className="mt-4">{item.title}</h5>
                                <p>{item.desc}</p>

                                {/* Number */}
                                <span className="value-number">
                                    0{i + 1}
                                </span>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Valuehome;