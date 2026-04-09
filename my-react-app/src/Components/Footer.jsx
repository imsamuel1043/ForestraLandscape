import React from "react";
import "../../src/assets/Css/Home.css";

const Footer = () => {
    return (
        <footer className="footer-section">

            <div className="container">
                <div className="row g-4">

                    {/* Office */}
                    <div className="col-lg-3 col-md-6">
                        <h5>Our Office</h5>
                        <p><i className="bi bi-geo-alt"></i> Forestra , Koyileri Rd, Mananthavady, Kerala 670645</p>
                        <p><i className="bi bi-telephone"></i> +4567899876543</p>
                        <p><i className="bi bi-envelope"></i> forestra.com</p>

                        <div className="footer-social">
                            <i className="bi bi-twitter"></i>
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-youtube"></i>
                            <i className="bi bi-linkedin"></i>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="col-lg-3 col-md-6">
                        <h5>Services</h5>
                        <ul>
                            <li>Landscape Design</li>
                            <li>Lawn Care</li>
                            <li>Vertical Garden</li>
                            <li>Hardscaping</li>

                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-3 col-md-6">
                        <h5>Quick Links</h5>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Our Services</li>
                            <li>Terms & Condition</li>
                            
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5>Working Hours</h5>
                        <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: Closed</p>

                        <button className="btn btn-light premium-btn mt-2">
                            Book Appointment
                        </button>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container d-flex justify-content-between flex-wrap">
                    <p>© 2026 Forestra. All Rights Reserved.</p>
                    <p>Designed with care</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;