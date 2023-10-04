import React from "react";
import notificationIcon from "../../../../assets/assets/favorite-icon.png";
import chatIcon from "../../../../assets/assets/icons8-messenger-24.png";

const TopBar = () => {
  return (
    <nav id="top-nav">
      <div className="container-fluid p-2">
        <div className="row ">
          <div className="col-3 ps-1">
            <h2 className="logo ">Crashline</h2>
          </div>
          <div className="col-1 offset-7 ">
            <img
              className="side-icon"
              src={notificationIcon}
              alt="notificationIcon"
            />
          </div>
          <div className="col-1  me-0">
            <img className="side-icon" src={chatIcon} alt="chatIcon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
