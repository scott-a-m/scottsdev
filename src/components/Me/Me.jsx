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
            This site is home to my earlier{" "}
            <a href="#projects-heading" id="projects-link">
              projects
            </a>{" "}
            from 2021-22.
          </p>
          <p>
            Check out the{" "}
            <a href="#toolkit-heading" id="technologies-link">
              technologies
            </a>{" "}
            I use below.
          </p>
          <p>
            Want to get in touch?{" "}
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
