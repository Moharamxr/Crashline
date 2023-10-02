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
import { NavLink } from "react-router-dom";
import Nav from "../top-nav/Nav";

const Sidebar = () => {
  return (
    <div className="wrapper">
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Crashline</h3>
        </div>
        <ul className="list-unstyled components">
          <li className="active h-100">
            <NavLink to={"/feed"}>
              <img className="side-icon" src={homeIcon} alt="homeIcon" /> Home
            </NavLink>
          </li>
          <li>
            <a href="#">
              <img className="side-icon" src={searchIcon} alt="" /> Search
            </a>
          </li>
          <li>
            <a href="#pageSubmenu">
              <img className="side-icon" src={reelsIcon} alt="" />
              Reels
            </a>
          </li>
          <li>
            <a href="#">
              <img className="side-icon" src={messagesIcon} alt="" />
              Messages
            </a>
          </li>
          <li>
            <a href="#">
              <img className="side-icon" src={notificationsIcon} alt="" />
              Notification
            </a>
          </li>
          <li>
            <a href="#">
              <img className="side-icon" src={createPostIcon} alt="" />
              Create Post
            </a>
          </li>
          <li>
            <NavLink to={"/profile"}>
              <img className="side-icon" src={profileIcon} alt="" />
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav id="bottom-nav" className="mobile-only">
        <ul className="bottom-nav-list">
          <li className="active">
            <a href="#">
              <img className="bottom-icon" src={homeIcon} alt="homeIcon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="bottom-icon" src={searchIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="#pageSubmenu">
              <img className="bottom-icon" src={reelsIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="bottom-icon" src={messagesIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="bottom-icon" src={notificationsIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="bottom-icon" src={createPostIcon} alt="" />
            </a>
          </li>
          <li>
            <NavLink to={"/profile"}>
              <img className="side-icon" src={profileIcon} alt="" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col">
            <Nav />
          </div>
        </div>
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
