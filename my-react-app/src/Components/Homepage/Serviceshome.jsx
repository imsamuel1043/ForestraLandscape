import React from 'react'
import "../../assets/Css/Home.css";


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

                    <div className="row g-4 justify-content-center premium-services">

                        {[
                            { name: "Hardscaping & Outdoor Structures", icon: "bi-bricks" },
                            { name: "Water Features & Irrigation", icon: "bi-droplet-half" },
                            { name: "Lawn & Ground Cover", icon: "bi-flower1" },
                            { name: "Resort, Residential & Commercial Landscaping", icon: "bi-buildings" },
                            { name: "Garden Design & Planning", icon: "bi-pencil-square" },
                            { name: "Planting & Green Development", icon: "bi-tree" },
                            { name: "Tropical & Ecological Landscaping", icon: "bi-globe2" },
                            { name: "Landscape Maintenance", icon: "bi-tools" }
                        ].map((s, i) => (

                            <div
                                className="col-lg-3 col-md-4 col-6 text-center"
                                key={i}
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <div className="service-icon-box">
                                    <div className="icon-wrap">
                                        <i className={`bi ${s.icon}`}></i>
                                    </div>
                                    <p>{s.name}</p>
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