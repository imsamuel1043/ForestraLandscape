import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/Css/About.css";
import img1 from "../../assets/Img/Img1.jpg";
import img2 from "../../assets/Img/Img2.jpg";

const Mission = () => {
    return (
        <section className="mission-section py-5">

            <div className="container">

                <span className="values-tag" text-center data-aos="fade-up " >[ OUR MISSION ]</span>

                <div className="row align-items-center g-5">

                    

                    {/* LEFT CONTENT */}
                    <div className="col-lg-6">

                        

                        <h2 className="mission-title">
                            CRAFTING BEAUTIFUL <br />
                            <span>GARDENS WITH PURPOSE</span>
                        </h2>

                        <p className="mission-text">
                            To craft sustainable tropical landscapes that celebrate biodiversity and natural beauty. To enhance wellbeing by designing outdoor 
                            spaces that are functional, timeless, and in harmony with theenvironment. 
                        </p>

                        <p className="mission-text">
                            To inspire a deeper connection with nature through thoughtful planting, planning, and eco-friendly practices.
                        </p>

                        <button className="mission-btn">
                            Explore Our Work →
                        </button>

                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="col-lg-6">

                        <div className="mission-grid">

                            {/* BIG IMAGE */}
                            <div className="mission-img large">
                                <img src={img1} alt="" />
                            </div>

                            {/* STAT CARD */}
                            <div className="mission-card">
                                <h3>850+</h3>
                                <p>Happy Customers</p>
                            </div>

                            {/* SMALL IMAGE */}
                            <div className="mission-img small">
                                <img src={img2} alt="" />
                            </div>

                            {/* STAT CARD */}
                            <div className="mission-card">
                                <h3>550+</h3>
                                <p>Projects Completed</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Mission;