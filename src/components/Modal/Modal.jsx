import React from "react";
import "./Modal.css";
import { useSiteContext } from "../../site_context";
import { FaWindowClose } from "react-icons/fa";

const Modal = () => {
  const { closeModal, projectData, isModalOpen } = useSiteContext();

  return (
    <div
      className={isModalOpen ? "modal-container show-modal" : "modal-container"}
    >
      <div className="modal-content">
        <div className="close-btn-container">
          <FaWindowClose onClick={closeModal} className="close-btn" />
        </div>

        <h2 className="project-heading">{projectData.name}</h2>
        <div className="description">
          {projectData.longDescription.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <p className="description">
          <span>
            <strong>
              <u>Technologies:</u>{" "}
            </strong>
          </span>
          {projectData.development}
        </p>
        {projectData.siteUrl ? (
          <div className="visit-btn-container">
            <a href={projectData.siteUrl} target="_blank" rel="noreferrer">
              <button className="visit-btn">Visit Site</button>
            </a>
          </div>
        ) : (
          <p className="description">
            <em>
              Due to an NDA, specific details of this project cannot be shared
            </em>
          </p>
        )}

        <img
          src={projectData.url}
          alt={projectData.name}
          className="modal-project-img"
        />
      </div>
    </div>
  );
};

export default Modal;
