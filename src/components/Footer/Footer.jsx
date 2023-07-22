import React from "react";
import "./Footer.css";
import { currentYear } from "../../constants";

const Footer = () => {
  return (
    <div className="footer-container">
      <h5>© Scott Mitchell {currentYear}</h5>
    </div>
  );
};

export default Footer;
