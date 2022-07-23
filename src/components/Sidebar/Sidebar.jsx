import React from "react";
import "./Sidebar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useSiteContext } from "../../site_context";

const Sidebar = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { closeSidebar, isSidebarOpen } = useSiteContext();

  return (
    <div
      className={
        isSidebarOpen ? "sidebar-container sidebar-open" : "sidebar-container"
      }
    >
      <div className="sidebar-top">
        <div className="logo">
          Scotts<span className="logo2">Dev</span>
        </div>
        <FaTimes className="close-btn2" onClick={closeSidebar} />
      </div>
      <ul className={isSidebarOpen ? "nav-links2 appearLinks" : "nav-links2"}>
        <li>
          <a href="#me-heading" className="nav-link2" onClick={closeSidebar}>
            Me
          </a>
        </li>
        <li>
          <a
            href="#projects-heading"
            className="nav-link2"
            onClick={closeSidebar}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#toolkit-heading"
            className="nav-link2"
            onClick={closeSidebar}
          >
            Toolkit
          </a>
        </li>
        <li>
          <a
            href="#contact-heading"
            className="nav-link2"
            onClick={closeSidebar}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="footer-container">
        <h5>© Scott Mitchell 2022</h5>
      </div>
    </div>
  );
};

export default Sidebar;
