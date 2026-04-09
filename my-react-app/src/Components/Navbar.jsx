import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';


import "../assets/Css/Nav.css";
import AOS from "aos";
import "aos/dist/aos.css";


import logo from "../../src/assets/Img/forestralogo.png";




const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg fixed-top premium-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">

          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="GreenScape Logo" className="logo-img" />

          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="nav">

            {/* Center Links */}
            <ul className="navbar-nav mx-auto align-items-lg-center">

              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Services
                </NavLink>
              </li>

             <li className="nav-item">
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Portfolio
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </NavLink>
              </li>

            </ul>

            {/* Right Side */}
            <div className="d-flex align-items-center gap-3">

              {/* Phone (very US-style trust element)
                                <div className="nav-phone d-none d-lg-block">
                                    <span>📞 (123) 456-7890</span>
                                </div> */}

              {/* CTA */}
              <a href="#contact" className="btn nav-cta-btn">
                Get Free Quote
              </a>

            </div>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar