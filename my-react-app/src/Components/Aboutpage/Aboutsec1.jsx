import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/Css/About.css";
import aboutImg from "../../assets/Img/bgabout.jpg";

const Aboutsec1 = () => {
    return (
        <section className="about2-section py-5">

            <div className="container">

                {/* TOP TEXT AREA */}
                <div className="row mb-5">

                    {/* LEFT TITLE */}
                    <div className="col-lg-4">
                        <h2 className="about2-title">
                            CRAFTING <br />
                            DREAM GARDENS<br />
                            <span>INTO REALITY</span>
                        </h2>
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="col-lg-8">
                        <div className="row">

                            <div className="col-md-6">
                                <p className="about2-text">
                                    We believe outdoor spaces should feel as alive and welcoming as the people who use them. Landscape design, for us, is about creating a natural connection 
                                    between people and the environment. Based in the lush beauty of Wayanad, we design tropical landscapes inspired by its forests, biodiversity,
                                    and calm surroundings.
                                </p>
                            </div>

                            <div className="col-md-6">
                                <p className="about2-text">

                                   Our spaces are crafted to feel natural, peaceful, and timeless. With thoughtful planning and sustainable practices, we create
                                     landscapes that enhance wellbeing while preserving the unique charm of Wayanad.

                                </p>
                            </div>

                        </div>
                    </div>

                </div>

                {/* IMAGE SECTION */}
                <div className="row g-4 align-items-stretch about2-media">

                    <div className="col-lg-12">
                        <div className="about2-image premium-image">

                            <img src={aboutImg} alt="Garden" />

                            {/* Overlay */}
                            <div className="image-overlay"></div>

                            {/* Optional Caption */}
                            <div className="image-caption">
                                <h5>Designing Nature</h5>
                                <p>Timeless landscapes crafted with purpose</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Aboutsec1;