import React, { useState } from "react";
import "./sidebar.css";
import reelsIcon from "../../../../assets/assets/reels-icon.png";
import { NavLink } from "react-router-dom";
import CreatePost from "../../create-post/CreatePost";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    console.log("modal opened");
  };

  const closeModal = () => {
    setIsOpen(false);
    console.log("modal closed");
  };
  return (
    <div className="wrapper">
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Crashline</h3>
        </div>
        <ul className="list-unstyled components">
          <li >
            <NavLink to={"/feed"}>
              <i className="bi bi-house me-1"/> 
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/feed"}>
              <i className="bi bi-search me-1" />
              Search
              
            </NavLink>
          </li>
          <li>
            <NavLink to={"/feed"}>
              <img className="side-icon" src={reelsIcon} alt="reelsIcon" />
              Reels
            </NavLink>
          </li>
          <li>
            <NavLink to={"/feed"}>
              <i className="bi bi-chat me-1" />
                Messages
            </NavLink>
          </li>
          <li>
            <NavLink to={"/feed"}>
              <i className="bi bi-heart me-1" />
              Notification
            </NavLink>
          </li>
          <li onClick={openModal}>
            <NavLink>
              <i className="bi bi-plus-square me-1" />
              Create Post
            </NavLink>
          </li>
          <li>
            <NavLink to={"/profile"}>
              <i className="bi bi-person fs me-1" /> Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <CreatePost isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export default Sidebar;
