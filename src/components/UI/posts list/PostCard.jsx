import React, { useState } from "react";
// import img from "../../../assets/wallpaperflare.com_wallpaper (3).jpg";
import {
  addComment,
  addLike,
  deletePost,
  getPostById,
} from "../../../services/posts.service";
import { useNavigate } from "react-router-dom";

const PostCard = ({ p, user, getUserPosts }) => {
  const path = "https://crashline.onrender.com/";
  const post = p;
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likesCount);
  const [openComment, setOpenComment] = useState(false);
  const [comment, setComment] = useState("");
  const [isLoadingComment, setIsLoadingComment] = useState(false);
  const [postComments, setPostComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const navigate = useNavigate();

  const handleLike = async () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setLikesCount(likesCount + 1);
    } else {
      setLikesCount(likesCount - 1);
    }

    try {
      await addLike(post._id);
    } catch (error) {}
  };
  const getComments = async () => {
    if (post.commentsCount > 0) {
      setShowComments(!showComments);
      try {
        const data = await getPostById(post._id);
        setPostComments(data.post.comments);
      } catch (error) {}
    }
  };
  const handleDelete = async () => {
    try {
      await deletePost(post._id);
      getUserPosts();
    } catch (error) {}
  };
  const openCommentSection = () => {
    setOpenComment(!openComment);
  };
  const handleComment = async () => {
    try {
      setIsLoadingComment(true);
      console.log(comment);
      await addComment(post._id, comment);
      openCommentSection(false);
    } catch (error) {}
    setIsLoadingComment(false);
    setOpenComment(false);
  };

  const currentDate = new Date();
  const createdAtDate = new Date(post.createdAt);
  const oneDayMilliseconds = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const daysAgo = Math.round(
    (currentDate - createdAtDate) / oneDayMilliseconds
  );
  return (
    <div className="card col-12 m-2 z-index-n2">
      <div className="row">
        <div className="col-8 d-flex">
          <img
            className=" m-3 me-0 rounded-circle"
            src={user ? path + user.picture : path + post.creator.picture}
            alt="profileIcon"
            width={40}
            height={40}
          />
          <p className="fw-bold logo post-name  mt-4">
            {post.creator.firstName} {user && user.firstName}
            {post.creator.lastName}
            {user && user.lastName}
          </p>
        </div>
        <div className="col-2 offset-2 mt-4">
          {user && (
            <i onClick={handleDelete} className="bi bi-trash3  del-btn"></i>
          )}
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
          className={`bi bi-heart${isLiked ? `-fill` : ``} me-2 post-icons`}
          onClick={handleLike}
        />
        <i
          className="bi bi-chat-left-dots post-icons"
          onClick={openCommentSection}
        />
        <i className="bi bi-send ms-2 post-icons" />
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
          {post.commentsCount>0 &&<p className="fw-light link-underline" onClick={getComments}>
            view all comments {post.commentsCount}
          </p>}
          <div
            className={`container-fluid ${openComment ? "d-block" : "d-none"}`}
          >
            <div className="row ">
              <div className={`form-floating col-8 p-0 ms-0`}>
                <input
                  type="text"
                  name="comment"
                  id={post._id}
                  className={`form-control `}
                  onChange={(e) => setComment(e.target.value)}
                />
                <label htmlFor={post._id}>add a comment</label>
              </div>
              <button
                onClick={handleComment}
                className="btn btn-dark col-3 p-0 m-0 "
                style={{ backgroundColor: "#6936F5" }}
              >
                {isLoadingComment ? <>Commenting</> : <>comment</>}
              </button>
            </div>
          </div>

          <p>{daysAgo === 0 ? <>today</> : <>{daysAgo} days ago</>} </p>
          {showComments &&
            postComments.map((comment) => (
              <p key={comment._id}>
                {comment.creator.firstName} {comment.creator.lastName} :{" "}
                {comment.content}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
