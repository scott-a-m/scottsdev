import React from "react";
import "./SidebarHeader.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { useSiteContext } from "../../site_context";

const SidebarHeader = () => {
  const { openSidebar } = useSiteContext();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="sidebar-header-container"
      data-aos-anchor-placement="top-top"
      data-aos-offset="-50"
      data-aos-anchor="#me-heading"
      data-aos="nav-animation"
      data-aos-duration="500"
    >
      <div className="logo">
        Scotts<span className="logo2">Dev</span>
      </div>
      <IoMenu className="menu-icon" onClick={openSidebar} />
    </div>
  );
};

export default SidebarHeader;
