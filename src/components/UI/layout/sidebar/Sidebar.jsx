import React, { useState } from "react";
import "./sidebar.css";
import homeIcon from "../../../../assets/assets/home-icon.png";
import searchIcon from "../../../../assets/assets/search-icon.png";
import reelsIcon from "../../../../assets/assets/reels-icon.png";
import messagesIcon from "../../../../assets/assets/icons8-messenger-24.png";
import notificationsIcon from "../../../../assets/assets/favorite-icon.png";
import createPostIcon from "../../../../assets/assets/create-post icon.png";
import profileIcon from "../../../../assets/assets/icons8-account-24.png";
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
          <li className="active h-100">
            <NavLink to={"/feed"}>
              <img className="side-icon " src={homeIcon} alt="homeIcon" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/feed"}>
              <img className="side-icon" src={searchIcon} alt="searchIcon" />
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
              <img
                className="side-icon"
                src={messagesIcon}
                alt="messagesIcon"
              />
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink to={"/feed"}>
              <img
                className="side-icon"
                src={notificationsIcon}
                alt="notificationsIcon"
              />
              Notification
            </NavLink>
          </li>
          <li onClick={openModal}>
            <NavLink>
              <img
                className="side-icon"
                src={createPostIcon}
                alt="createPostIcon"
              />
              Create Post
            </NavLink>
          </li>
          <li>
            <NavLink to={"/profile"}>
              <img className="side-icon" src={profileIcon} alt="profileIcon" />
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <CreatePost isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export default Sidebar;
