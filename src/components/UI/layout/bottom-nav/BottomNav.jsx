import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import homeIcon from "../../../../assets/assets/home-icon.png";
import searchIcon from "../../../../assets/assets/search-icon.png";
import reelsIcon from "../../../../assets/assets/reels-icon.png";
// import messagesIcon from "../../../../assets/assets/icons8-messenger-24.png";
// import notificationsIcon from "../../../../assets/assets/favorite-icon.png";
import createPostIcon from "../../../../assets/assets/create-post icon.png";
import profileIcon from "../../../../assets/assets/icons8-account-24.png";
import CreatePost from "../../create-post/CreatePost";

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    console.log('modal opened');
  };

  const closeModal = () => {
    setIsOpen(false);
    console.log('modal closed');
  };
  return (
    <div className="wrapper">
      <nav id="bottom-nav" className="mobile-only">
        <ul className="bottom-nav-list">
          <li className="active">
            <NavLink to={"/feed"}>
              <img className="bottom-icon" src={homeIcon} alt="homeIcon" />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/feed"}>
              <img className="bottom-icon" src={searchIcon} alt="searchIcon" />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/feed"}>
              <img className="bottom-icon" src={reelsIcon} alt="reelsIcon" />
            </NavLink>
          </li>
          {/* <li>
          <NavLink to={"/feed"}>
            <img className="bottom-icon" src={messagesIcon} alt="messagesIcon" />
          </NavLink>
        </li> */}
          {/* <li>
          <NavLink to={"/feed"}>
            <img className="bottom-icon" src={notificationsIcon} alt="notificationsIcon" />
          </NavLink>
        </li> */}
          <li onClick={openModal}>
            <NavLink >
              <img
                className="bottom-icon"
                src={createPostIcon}
                alt="createPostIcon"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/profile"}>
              <img className="side-icon" src={profileIcon} alt="profileIcon" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <CreatePost isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export default BottomNav;
