import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import heroImg from "../../assets/Img/herobgimg.jpg";

import "../../assets/Css/Hero.css";

const Hero = () => {

     const [count, setCount] = useState(0);
    
        useEffect(() => {
            let start = 0;
            const end = 500;
    
            const interval = setInterval(() => {
                start += 10;
                setCount(start);
    
                if (start >= end) {
                    clearInterval(interval);
                }
            }, 30);
    
            return () => clearInterval(interval);
        }, []);


    return (
        <>

            {/* herosection */}

            <section
                className="hero d-flex align-items-center"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className="overlay"></div>

                <div className="container position-relative">
                    <div className="row align-items-center gy-5">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-7 text-white">
                            <h1 className="hero-title" data-aos="fade-up">
                                Designing Nature, <br /> Creating Peace
                            </h1>

                            <p className="hero-subtitle" data-aos="fade-up">
                                Premium landscaping solutions that transform outdoor spaces into beautiful, functional environments.
                            </p>

                            <div className="d-flex gap-3 flex-wrap">
                                <button className="btn btn-forest px-4 py-3" data-aos="fade-up">
                                    Explore Our Work
                                </button>

                            </div>
                        </div>

                        {/* RIGHT CARD */}
                        <div className="col-lg-5 d-flex justify-content-lg-end justify-content-center">
                            <div className="hero-card text-center">

                                <h2 className="counter">{count}+</h2>
                                <p>Satisfied Clients</p>

                                <div className="client-circles mt-3">
                                    <div className="circle c1"></div>
                                    <div className="circle c2"></div>
                                    <div className="circle c3"></div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero