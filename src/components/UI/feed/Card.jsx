import React from "react";
import img from "../../../assets/7592517501_4_1_8.jpg";
import likeIcon from "../../../assets/assets/favorite-icon.png";
import commentIcon from "../../../assets/assets/comment-icon.png";
import profileIcon from "../../../assets/assets/user.png";

const Card = () => {
  return (
    <div className="card m-2">
      <div className="row">
        <div className="col d-flex">
          <img className="side-icon m-3 me-0" src={profileIcon} alt="profileIcon" />
          <p className="fw-bold logo m-3" >Friend</p>
        </div>
      </div>

      <img
        src={img}
        width={1000}
        height={400}
        className="card-img-top"
        alt="Post"
      />
      <div className="card-body">
        <img className="side-icon" src={likeIcon} alt="likeIcon" />
        <img className="side-icon ms-2" src={commentIcon} alt="commentIcon" />
      </div>
    </div>
  );
};

export default Card;
