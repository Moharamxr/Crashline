import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts } from "../../../services/posts.service";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    try {
      setIsLoading(true);
      const data = await getPosts();
      setPosts(data.posts.reverse());
      setError("");
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      throw error;
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {posts.length === 0 && !isLoading && !error ? (
        <p className="centred logo mt-5">No posts yet!!</p>
      ) : (
        posts.map((post) => <PostCard key={post._id} p={post} />)
      )}

      {error && !isLoading && (
        <p className="text-center text-danger fw-bold mt-5">
          Something went wrong..!!!
        </p>
      )}

      {isLoading && (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div className="spinner-border logo" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
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
