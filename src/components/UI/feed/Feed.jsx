import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Card from "./Card";
import profileIcon from "../../../assets/assets/user.png";
import './feed.css'
import Nav from "../top-nav/Nav";

const Feed = () => {
  return (
    <>
      <div className="container-fluid mt-1 mb-3">
        <div className="row d-flex justify-content-start ">
          <div className="col-1 me-4">
          <img className="story-icon " src={profileIcon} alt="profileIcon" />
          </div>
          <div className="col-1 me-4">
          <img className="story-icon " src={profileIcon} alt="profileIcon" />
          </div>
          <div className="col-1 me-4">
          <img className="story-icon " src={profileIcon} alt="profileIcon" />
          </div>
          <div className="col-1 me-4">
          <img className="story-icon " src={profileIcon} alt="profileIcon" />
          </div>
          <div className="col-1 me-4">
          <img className="story-icon " src={profileIcon} alt="profileIcon" />
          </div>
          <div className="col-1 me-4">
          <img className="story-icon " src={profileIcon} alt="profileIcon" />
          </div>
          
          
          
        </div>
      </div>

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <div className="mt-5 ">.</div>
    </>
  );
};

export default Feed;
