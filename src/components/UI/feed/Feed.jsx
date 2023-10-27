import React, { useEffect } from "react";
import "./feed.css";
import Posts from "../posts list/Posts";
import TopBar from "./top-nav/TopBar";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(function () {
      localStorage.setItem("isLoggedIn", "false");
      console.log("logged out");
      navigate("/");
    }, 24 * 60 * 60 * 1000);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <TopBar />
        </div>
      </div>
      <div className="row centred">
        <div className="col-sm-8 col-xl-5 offset-md-1 ">
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default Feed;
