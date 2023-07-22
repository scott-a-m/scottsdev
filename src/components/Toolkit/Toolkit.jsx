import React, { useState } from "react";
import { GrNode } from "react-icons/gr";
import {
  SiReact,
  SiSolidity,
  SiMongodb,
  SiCsharp,
  SiDotnet,
  SiUnity,
  SiTypescript
} from "react-icons/si";
import "./Toolkit.css";
import { FaGitAlt, FaPython } from "react-icons/fa";
import { GiToolbox } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Toolkit = () => {
  const [shake, setShake] = useState(false);
  const [click, setClick] = useState(true);
  const [emerge, setEmerge] = useState(false);

  const shakeToolbox = () => {
    if (!click) return;
    setShake(true);
    setEmerge(true);
    setClick(false);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="toolkit">
      <h2 className="heading" id="toolkit-heading">
        Toolkit
      </h2>
      <div
        className={click ? "toolbox-container pointer" : "toolbox-container"}
        onClick={shakeToolbox}
      >
        <h2 className={click ? "codes flash" : "codes opaque"}>{"<"}</h2>
        <h2 className={click ? "codes flash" : "codes opaque"}>{">"}</h2>

        <button
          className={
            shake
              ? "codes-text2 heading disappear"
              : "codes-text2 heading flash"
          }
          onClick={shakeToolbox}
        >
          Click Me!
        </button>
        <GiToolbox className={shake ? "toolbox shake" : "toolbox"} />
        <div
          className={
            emerge ? "toolbox-code-icon1 emerge1" : "toolbox-code-icon1"
          }
          id="toolbox-icon-1"
        >
          <SiReact />
          <h3 className={shake ? "icon-text appear3" : "icon-text"}>React</h3>
        </div>
        <div
          className={
            emerge ? "toolbox-code-icon2 emerge2" : "toolbox-code-icon2"
          }
        >
          <GrNode id="toolbox-icon-2" />
          <h3 className={shake ? "icon-text appear3" : "icon-text"}>Node</h3>
        </div>

        <div
          className={
            emerge ? "toolbox-code-icon1 emerge3" : "toolbox-code-icon1"
          }
        >
          <SiSolidity id="toolbox-icon-3" />
          <h3 className={shake ? "icon-text appear3" : "icon-text"}>
            Solidity
          </h3>
        </div>
        <div
          className={
            emerge ? "toolbox-code-icon2 emerge4" : "toolbox-code-icon2"
          }
        >
          <SiMongodb id="toolbox-icon-4" />
          <h3 className={shake ? "icon-text appear3" : "icon-text"}>MongoDB</h3>
        </div>
        <div
          className={
            emerge ? "toolbox-code-icon1 emerge5" : "toolbox-code-icon1"
          }
        >
          <SiTypescript id="toolbox-icon-5" />
          <h3 className={shake ? "icon-text appear3" : "icon-text"}>
            Typescript
          </h3>
        </div>
        <div
          className={
            emerge ? "toolbox-code-icon2 emerge6" : "toolbox-code-icon2"
          }
        >
          <FaGitAlt id="toolbox-icon-6" />
          <h3 className={shake ? "icon-text appear3" : "icon-text"}>Git</h3>
        </div>
        <div
          className={
            emerge ? "toolbox-code-icon1 emerge7" : "toolbox-code-icon1"
          }
        >
          <FaPython id="toolbox-icon-7" />
          <h3 className={shake ? "icon-text appear3" : "icon-text"}>Python</h3>
        </div>
        <div
          className={
            emerge ? "toolbox-code-icon2 emerge8" : "toolbox-code-icon2"
          }
        >
          <SiCsharp id="toolbox-icon-8" />
          <h3 className={shake ? "icon-text appear3" : "icon-text"}>
            C-Sharp
          </h3>
        </div>
        <div
          className={
            emerge ? "toolbox-code-icon1 emerge9" : "toolbox-code-icon1"
          }
        >
          <SiDotnet id="toolbox-icon-9" />
          <h3 className={shake ? "icon-text appear3" : "icon-text"}>.NET</h3>
        </div>
        <div
          className={
            emerge ? "toolbox-code-icon2 emerge10" : "toolbox-code-icon2"
          }
        >
          <SiUnity id="toolbox-icon-10" />
          <h3 className={shake ? "icon-text appear3" : "icon-text"}>Unity</h3>
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
