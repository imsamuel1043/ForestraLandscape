import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import beforeImg from "../../assets/Img/Img1.jpg";
import afterImg from "../../assets/Img/Img2.jpg";
import "../../assets/Css/Home.css";

const Abouthome = () => {

    const [sliderPosition, setSliderPosition] = useState(50);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <>
            <section className="about-section py-5">

                <div className="container text-center">

                    <p className="about-subtitle values-tag" data-aos="fade-up">
                        [ ABOUT OUR COMPANY ]
                    </p>

                    <h2 className="values-title" data-aos="fade-up">
                        Forestra,<br />Where elegance meets
                        <span> natural design.</span>
                    </h2>

                    <p className="about-desc mx-auto" data-aos="fade-up">
                        Where passion meets precision, we shape landscapes into elegant living experiences.
                    </p>

                    <button className="btn about-btn mt-3" data-aos="zoom-in">
                        More About Us →
                    </button>

                </div>

                {/* BEFORE AFTER SECTION */}
                <section className="container beforeafter my-5" data-aos="fade-up">

                    <div className="before-after-container position-relative overflow-hidden rounded-4 shadow-lg">

                        {/* After Image */}
                        <img
                            src={afterImg}
                            alt="After"
                            className="img-fluid position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                        />

                        {/* Before Image */}
                        <img
                            src={beforeImg}
                            alt="Before"
                            className="img-fluid position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                            style={{
                                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                            }}
                        />

                        {/* Overlay labels */}
                        <div className="label before-label">Before</div>
                        <div className="label after-label">After</div>

                        {/* Slider Line */}
                        <div
                            className="slider-line"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className="slider-handle"></div>
                        </div>

                        {/* Range Input */}
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderPosition}
                            onChange={(e) => setSliderPosition(Number(e.target.value))}
                            className="range-input"
                        />
                    </div>

                </section>

            </section>
        </>
    );
};

export default Abouthome;