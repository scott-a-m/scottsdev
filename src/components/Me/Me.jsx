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
            <span className="keyword">Full Stack Web Developer</span> by evening
            and weekends!
          </p>
          <p>
            Being passionate about computers from a young age, my career took a
            different direction after graduation.
          </p>
          <p>
            My other passion, language learning - Mandarin, Spanish and French,
            brought me to the field of language teaching where I work full-time
            at university.
          </p>
          <p>
            I have now rekindled my passion for computers through web
            development, developing for over a year, and am{" "}
            <a
              href="https://www.freecodecamp.org/scott-a-m"
              target="_blank"
              rel="noreferrer"
              id="certifications-link"
            >
              ceritified
            </a>{" "}
            in front- and back-end development.
          </p>
          <p>
            Check out some of my{" "}
            <a href="#projects-heading" id="projects-link">
              projects
            </a>{" "}
            and the{" "}
            <a href="#toolkit-heading" id="technologies-link">
              technologies
            </a>{" "}
            I use below.
          </p>
          <p>
            Have a website in mind?{" "}
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
