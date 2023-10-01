import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Card from "./Card";
import profileIcon from "../../../assets/assets/user.png";

const Feed = () => {
  return (
    <>
      <div className="container-fluid mt-1 mb-3">
        <div className="row centred">
          <div className="col ">
          <img className="side-icon " src={profileIcon} alt="profileIcon" />
          </div>
          <div className="col ">
          <img className="side-icon " src={profileIcon} alt="profileIcon" />
          </div>
          <div className="col ">
          <img className="side-icon " src={profileIcon} alt="profileIcon" />
          </div>
          <div className="col ">
          <img className="side-icon " src={profileIcon} alt="profileIcon" />
          </div>
          <div className="col ">
          <img className="side-icon " src={profileIcon} alt="profileIcon" />
          </div>
          <div className="col ">
          <img className="side-icon " src={profileIcon} alt="profileIcon" />
          </div>
          <div className="col ">
          <img className="side-icon " src={profileIcon} alt="profileIcon" />
          </div>
          <div className="col ">
          <img className="side-icon " src={profileIcon} alt="profileIcon" />
          </div>
          <div className="col ">
          <img className="side-icon " src={profileIcon} alt="profileIcon" />
          </div>
          <div className="col ">
          <img className="side-icon " src={profileIcon} alt="profileIcon" />
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
    </>
  );
};

export default Feed;
