import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../../assets/Css/Home.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Select from "react-select";




// import Navbar from "./Navbar";
import Hero from "./Hero";
import Abouthome from "./Abouthome";
import Valuehome from "./Valuehome";
import Serviceshome from "./Serviceshome";
import Processhome from "./Processhome";
import Portfoliohome from "./Portfoliohome";









export default function App() {

    const [scrolled, setScrolled] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(50);

    useEffect(() => {
        let start = 0;
        const end = 500;
        const duration = 2000;
        const incrementTime = 20;
        const step = Math.ceil(end / (duration / incrementTime));

        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(start);
        }, incrementTime);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);




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

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div>
            {/* <Navbar /> */}
            <Hero />
            <Abouthome />
            <Valuehome />
            <Serviceshome />
            <Processhome />
            <Portfoliohome />



















            {/* Testimonials */}
            {/* <section className="py-5 text-center">
                <div className="container" data-aos="fade-up">
                    <h2 className="mb-4">What Clients Say</h2>
                    <p>“Amazing transformation! Our backyard looks stunning.”</p>
                    <p>– John D., Homeowner</p>
                </div>
            </section> */}

            {/* Blog */}
            {/* <section className="py-5 bg-light">
                <div className="container text-center" data-aos="fade-up">
                    <h2 className="mb-4">Latest Tips</h2>
                    <div className="row">
                        {["Garden Trends 2026", "Best Plants for Climate", "Lawn Care Tips"].map((b, i) => (
                            <div className="col-md-4" key={i}>
                                <div className="card premium-card p-3">
                                    <h5>{b}</h5>
                                    <p>Learn expert tips for maintaining your landscape.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* CTA */}
            {/* <section className="cta text-white text-center py-5" data-aos="fade-up">
                <div className="cta-overlay">
                    <h2>Ready to Transform Your Landscape?</h2>
                    <button className="btn btn-light premium-btn mt-3">Contact Us</button>
                </div>
            </section> */}

            {/* Contact */}
            <section id="contact" bg-dark >
                <div className="container-fluid" data-aos="fade-up">

                    <div className="map-box">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62488.45164263865!2d75.97428708746234!3d11.798231155650818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5df5cf3264097%3A0x58a6a4f15bb9a3b!2sThe%20Caffeine%20Craft!5e0!3m2!1sen!2sin!4v1775711740862!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </section>

            {/* Footer */}
            {/* <footer className="footer text-center text-white p-4">
                <p>© 2026 GreenScape Landscaping | All Rights Reserved</p>
            </footer> */}
        </div>
    );
}
