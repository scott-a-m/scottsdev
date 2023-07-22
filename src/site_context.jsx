import React, { useContext, useState } from "react";

const SiteContext = React.createContext();

const SiteProvider = ({ children }) => {
  const [projectData, setProjectData] = useState({
    name: "",
    url: "",
    technologies: "",
    description: "",
    longDescription: [
      "",
    ],
    development:
      "",
    siteUrl: "",
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
