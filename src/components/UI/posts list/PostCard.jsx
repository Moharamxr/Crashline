import React from "react";
import img from "../../../assets/wallpaperflare.com_wallpaper (3).jpg";
import likeIcon from "../../../assets/assets/favorite-icon.png";
import commentIcon from "../../../assets/assets/comment-icon.png";
import sendIcon from "../../../assets/assets/send-message icon.png";
import { addLike } from "../../../services/posts.service";

const PostCard = ({ p, getData ,user }) => {
  const path = "https://crashline.onrender.com/";
  const post = p;
  
  const handleLike = async () => {
    try {
      await addLike(post._id);
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card m-2 z-index-n2">
      <div className="row">
        <div className="col d-flex">
          <img
            className="side-icon m-3 me-0 rounded-circle"
            src={user.picture?(path+user.picture):(img)}
            alt="profileIcon"
          />
          <p className="fw-bold logo m-3">
            
            {post.creator.firstName} {user&&(user.firstName)} {post.creator.lastName}{user&&(user.lastName)}
          </p>
        </div>
      </div>

      <img
        src={path + post.image}
        width={1000}
        height={400}
        className="card-img-top"
        alt="Post"
      />
      <div className="card-body">
        <img
          onClick={handleLike}
          className="side-icon"
          src={likeIcon}
          alt="likeIcon"
        />
        <img className="side-icon ms-2" src={commentIcon} alt="commentIcon" />
        <img className="side-icon ms-2" src={sendIcon} alt="commentIcon" />
        <div className="card-text logo ps-1">
          <p className="">{post.likesCount} likes</p>
          <p className="text-dark"><span className="logo fw-medium">
          {post.creator.firstName} {user&&(user.firstName)} {post.creator.lastName}{user&&(user.lastName)}  {' '}
            </span>
            
            {post.content}
          </p>
          <p className="fw-light link-underline">view all comments</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
