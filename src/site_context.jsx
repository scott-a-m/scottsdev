import React, { useContext, useState } from "react";

const SiteContext = React.createContext();

const SiteProvider = ({ children }) => {
  const [projectData, setProjectData] = useState({
    name: "Scott Shop",
    url: "/assets/img/scott-shop.png",
    technologies: "MERN Stack",
    description: "Fashion Store",
    longDescription: [
      "Scott Shop is a online fashion store. You can browse the cool clothes, 'buy' them with the test credit card (it's a personal project - not a real shop) provided via stripe payment, view your orders and leave reviews.",
    ],
    development:
      "Scott Shop was developed using the MERN stack (MongoDB, Express, React and Node)",
    siteUrl: "https://scottshop.netlify.app/",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getProjectData = (data) => {
    setProjectData(data);
    setIsModalOpen(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <SiteContext.Provider
      value={{
        getProjectData,
        openModal,
        closeModal,
        isModalOpen,
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        projectData,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

const useSiteContext = () => {
  return useContext(SiteContext);
};

export { SiteProvider, useSiteContext };
