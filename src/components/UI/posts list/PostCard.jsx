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
const currentDate = new Date();
const createdAtDate = new Date(post.createdAt);
const oneDayMilliseconds = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
const daysAgo = Math.round((currentDate - createdAtDate) / oneDayMilliseconds)+1;
  return (
    <div className="card m-2 z-index-n2">
      <div className="row">
        <div className="col d-flex">
          <img
            className=" m-3 me-0 rounded-circle"
            src={user ? path + user.picture : path + post.creator.picture}
            alt="profileIcon"
            width={40}
            height={40}
          />
          <p className="fw-bold logo m-3 mt-4">
            {post.creator.firstName} {user && user.firstName}
            {post.creator.lastName}
            {user && user.lastName}
          </p>
          {user && <i className="bi bi-trash3  del-btn"></i>}
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
          <p>{daysAgo===0? (<>today</>):(<>{daysAgo} days ago</>)} </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
