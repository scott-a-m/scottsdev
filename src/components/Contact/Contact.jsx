import React from "react";
import "./Contact.css";
import { social } from "../../data/social-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <h2 className="heading" id="contact-heading">
        Contact
      </h2>
      <h4 className="question" data-aos="fade-up" data-aos-duration="500">
        Have a <span className="keyword">website</span> or{" "}
        <span className="keyword">web app</span> in mind? Let's connect!
      </h4>
      <div className="contact-container">
        <div
          className="form-container"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <form
            action="https://formspree.io/f/xgedgwqp"
            method="post"
            className="form-content"
          >
            <label htmlFor="name" className="label">
              Name
            </label>
            <input name="name" id="name" type="text" className="input" required="true"/>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input name="Email" id="email" type="email" className="input" required="true"/>
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="textbox"
              required="true"
            ></textarea>
            <div className="visit-btn-container">
              <button type="submit" className="visit-btn margin">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div
          className="contact-info"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-offset="-200"
        >
          <div className="logo-container">
            <div className="logo xl">
              Scotts<span className="logo2 xl">Dev</span>
            </div>
          </div>
          <ul className="social-icons">
            {social.map((item, index) => {
              const { url, icon, text } = item;
              return (
                <li key={index} className="icon-container">
                  <a
                    className="social-icon"
                    href={url}
                    alt={text}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
          <div>
            <p>
              <span className="contact-subheading">Email:</span>{" "}
              scott_a_mitchell@163.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
