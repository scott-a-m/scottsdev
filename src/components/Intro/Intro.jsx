import React from "react";
import "./Intro.css";
import { FaProjectDiagram, FaToolbox } from "react-icons/fa";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { ImCog } from "react-icons/im";

const Intro = () => {
  return (
    <div className="intro">
      <div className="info-block">
        <ul className="name" id="name">
          <li>S</li>
          <li>c</li>
          <li>o</li>
          <li>t</li>
          <li>t</li>
          <li className="invisible">.</li>
          <li>M</li>
          <li>i</li>
          <li>t</li>
          <li>c</li>
          <li>h</li>
          <li>e</li>
          <li>l</li>
          <li>l</li>
        </ul>
        <ul className="name" id="title">
          <li>F</li>
          <li>u</li>
          <li>l</li>
          <li>l</li>
          <li className="invisible">.</li>
          <li>S</li>
          <li>t</li>
          <li>a</li>
          <li>c</li>
          <li>k</li>
          <li className="invisible">.</li>
          <li>D</li>
          <li>e</li>
          <li>v</li>
          <li>e</li>
          <li>l</li>
          <li>o</li>
          <li>p</li>
          <li>e</li>
          <li>r</li>
        </ul>
      </div>
      <div className="cogs">
        <ImCog className="cog" id="cog1" />
        <ImCog className="cog" id="cog2" />
        <ImCog className="cog" id="cog3" />
        <ImCog className="cog" id="cog4" />
        <ImCog className="cog" id="cog5" />
        <ImCog className="cog" id="cog6" />
        <ImCog className="cog" id="cog7" />
        <ImCog className="cog" id="cog8" />
        <ImCog className="cog" id="cog9" />
        <ImCog className="cog" id="cog10" />
        <ImCog className="cog" id="cog11" />
        <ImCog className="cog" id="cog12" />
        <ImCog className="cog" id="cog13" />
        <ImCog className="cog" id="cog14" />
        <ImCog className="cog" id="cog15" />
        <ImCog className="cog" id="cog16" />
        <ImCog className="cog" id="cog17" />
      </div>
      <div className="menu">
        <div className="menu-item">
          <a href="#me-heading" className="menu-link">
            <h3 className="menu-link-heading">Me</h3>
            <BsFileEarmarkPerson className="intro-icon" />
          </a>
        </div>
        <div className="menu-item">
          <a href="#projects-heading" className="menu-link">
            <h3 className="menu-link-heading">Projects</h3>
            <FaProjectDiagram className="intro-icon" />
          </a>
        </div>
        <div className="menu-item">
          <a href="#toolkit-heading" className="menu-link">
            <h3 className="menu-link-heading">Toolkit</h3>
            <FaToolbox className="intro-icon" />
          </a>
        </div>
        <div className="menu-item">
          <a href="#contact-heading" className="menu-link">
            <h3 className="menu-link-heading">Contact</h3>
            <HiOutlineMail className="intro-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
