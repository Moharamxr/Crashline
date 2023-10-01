import React from "react";
import "./sidebar.css";
import homeIcon from "../../../assets/assets/home-icon.png";
import searchIcon from "../../../assets/assets/search-icon.png";
import reelsIcon from "../../../assets/assets/reels-icon.png";
import messagesIcon from "../../../assets/assets/icons8-messenger-24.png";
import notificationsIcon from "../../../assets/assets/favorite-icon.png";
import createPostIcon from "../../../assets/assets/create-post icon.png";
import profileIcon from "../../../assets/assets/icons8-account-24.png";
import Card from "../feed/Card";
import Feed from "../feed/Feed";

const Sidebar = () => {
  return (
    <div class="wrapper">
      <nav id="sidebar">
        <div class="sidebar-header">
          <h3>Crashline</h3>
        </div>
        <ul class="list-unstyled components">
          <li class="active">
            <a href="#">
              <img class="side-icon" src={homeIcon} alt="homeIcon" /> Home
            </a>
          </li>
          <li>
            <a href="#">
              <img class="side-icon" src={searchIcon} alt="" /> Search
            </a>
          </li>
          <li>
            <a href="#pageSubmenu">
              <img class="side-icon" src={reelsIcon} alt="" />
              Reels
            </a>
          </li>
          <li>
            <a href="#">
              <img class="side-icon" src={messagesIcon} alt="" />
              Messages
            </a>
          </li>
          <li>
            <a href="#">
              <img class="side-icon" src={notificationsIcon} alt="" />
              Notification
            </a>
          </li>
          <li>
            <a href="#">
              <img class="side-icon" src={createPostIcon} alt="" />
              Create Post
            </a>
          </li>
          <li>
            <a href="#">
              <img class="side-icon" src={profileIcon} alt="" />
              Profile
            </a>
          </li>
        </ul>
      </nav>
      <nav id="bottom-nav" class="mobile-only">
        <ul class="bottom-nav-list">
          <li class="active">
            <a href="#">
              <img class="bottom-icon" src={homeIcon} alt="homeIcon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img class="bottom-icon" src={searchIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="#pageSubmenu">
              <img class="bottom-icon" src={reelsIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img class="bottom-icon" src={messagesIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img class="bottom-icon" src={notificationsIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img class="bottom-icon" src={createPostIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img class="bottom-icon" src={profileIcon} alt="" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="row centred">
          <div className="col-md-6">
            <Feed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
