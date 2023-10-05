import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts } from "../../../services/posts.service";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [internet, setInternet] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    try {
      setIsLoading(true);
      if (internet) {
        const data = await getPosts();
        setPosts(data.posts.reverse());
        setError(null);
        setInternet(true);
        setIsLoading(false);
      }
    } catch (error) {
      if (error.message === "Network Error") {
        setInternet(false);
        setIsLoading(true);
      } else {
        setError(error.response.data.message);
      }
      throw error;
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {error && (
        <p className="text-center text-danger fw-bold mt-5">
          Something went wrong..!!!
        </p>
      )}
      {!internet && (
        <p className="text-center text-danger fw-bold mt-5">Network Error</p>
      )}
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div className="spinner-border logo" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : posts.length === 0 ? (
        <p className="centred logo">No posts yet!!</p>
      ) : (
        posts.map((post) => <PostCard key={post._id} p={post} />)
      )}

      <div className="">
        <div className="row mt-5">
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default Posts;
