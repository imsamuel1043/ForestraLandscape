import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "../assets/Css/Nav.css";
import AOS from "aos";
import "aos/dist/aos.css";

import logo from "../../src/assets/Img/forestralogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top premium-navbar ${scrolled ? "scrolled" : ""
        }`}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="GreenScape Logo" className="logo-img" />
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span style={{ color: "#fff", fontSize: "1.5rem" }}>
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>

        {/* Menu */}
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""
            }`}
          id="nav"
        >
          {/* Center Links */}
          <ul className="navbar-nav mx-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                onClick={handleNavClick}
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
                onClick={handleNavClick}
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
                onClick={handleNavClick}
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
                onClick={handleNavClick}
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
                onClick={handleNavClick}
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
            <a href="#contact" className="btn nav-cta-btn">
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;