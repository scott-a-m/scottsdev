import React from "react";
import "./Me.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Me = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <h2 className="heading" id="me-heading">
        ABOUT ME
      </h2>
      <div className="me-container">
        <div
          className="me-image-container"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <img src="./assets/img/scott-m.jpeg" alt="scott" className="me-img" />
        </div>
        <div className="me-text" data-aos="fade-up" data-aos-duration="500">
          <p>
            Hi! I'm <span className="keyword">Scott Mitchell</span> and I'm a{" "}
            <span className="keyword">Full Stack Web Developer</span>.
          </p>
          <p>
            I've contracted on a wide range of{" "}
            <a href="#commercial-applications" id="projects-link">
              commericial projects
            </a>
            , including point of sale, trailer hire, and data services
            applications.
          </p>
          <p>
            I also have a range of personal projects I have developed. Come
            check{" "}
            <a href="#personal-projects" id="projects-link">
              them
            </a>{" "}
            out and the{" "}
            <a href="#toolkit-heading" id="technologies-link">
              technologies
            </a>{" "}
            I use below.
          </p>
          <p>
            Have a web or mobile application in mind?{" "}
            <a href="#contact-heading" id="contact-link">
              Let's connect!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Me;
