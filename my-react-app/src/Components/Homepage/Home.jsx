import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../../assets/Css/Home.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Select from "react-select";




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

            <Hero />
            <Abouthome />
            <Valuehome />
            <Serviceshome />
            <Processhome />
            <Portfoliohome />


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

        </div>
    );
}
