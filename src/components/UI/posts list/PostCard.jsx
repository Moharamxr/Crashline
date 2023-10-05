import React, { useState } from "react";
import img from "../../../assets/wallpaperflare.com_wallpaper (3).jpg";
import { addLike, deletePost } from "../../../services/posts.service";

const PostCard = ({ p, user ,getUserPosts}) => {
  const path = "https://crashline.onrender.com/";
  const post = p;
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likesCount);
  
  const handleLike = async () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setLikesCount(likesCount + 1);
    } else {
      setLikesCount(likesCount - 1);
    }

    try {
      await addLike(post._id);
    } catch (error) {
      console.log(error);
    }
  };
const handleDelete = async () => {
    try {
      await deletePost(post._id);
      getUserPosts();
    } catch (error) {
      
    }
}; 
  return (
    <div className="card m-2 z-index-n2">
      <div className="row">
        <div className="col d-flex">
          <img
            className=" m-3 me-0 rounded-circle"
            src={user ? path + user.picture : path + post.creator.picture}
            alt="profileIcon"
            width={70}
            height={70}
          />
          <p className="fw-bold logo m-3 mt-4">
            {post.creator.firstName} {user && user.firstName}
            {post.creator.lastName}
            {user && user.lastName}
          </p>
          {user && <p onClick={handleDelete} className="btn btn-danger del-btn">delete</p>}
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
        <i
          className={`bi bi-heart${isLiked ? `-fill` : ``} me-2 `}
          onClick={handleLike}
        />
        <i className="bi bi-chat-left-dots " />
        <i className="bi bi-send ms-2" />
        <div className="card-text logo ps-1">
          <p className="">{likesCount} likes</p>
          <p className="text-dark">
            <span className="logo fw-medium">
              {post.creator.firstName} {user && user.firstName}{" "}
              {post.creator.lastName}
              {user && user.lastName}{" "}
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
