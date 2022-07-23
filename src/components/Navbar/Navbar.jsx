import React from "react";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="navbar-container"
      data-aos-anchor-placement="top-top"
      data-aos-offset="-50"
      data-aos-anchor="#me-heading"
      data-aos="nav-animation"
      data-aos-duration="500"
    >
      <div className="logo">
        Scotts<span className="logo2">Dev</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#me-heading" className="nav-link">
            Me
          </a>
        </li>
        <li>
          <a href="#projects-heading" className="nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#toolkit-heading" className="nav-link">
            Toolkit
          </a>
        </li>
        <li>
          <a href="#contact-heading" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
