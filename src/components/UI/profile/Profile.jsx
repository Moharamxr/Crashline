import React, { useEffect, useState } from "react";
import profilePhoto from "../../../assets/wallpaperflare.com_wallpaper (3).jpg";
import "./profile.css";
import EditProfile from "../edit-profile/EditProfile";
import img from "../../../assets/wallpaperflare.com_wallpaper (3).jpg";
import {
  getUserInfoById,
  getUserPostsById,
} from "../../../services/user.service";
import PostCard from "../posts list/PostCard";

const Profile = () => {
  const userId = localStorage.getItem("userId");
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const [error, setError] = useState(null);
  const [internet, setInternet] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const getUserPosts = async () => {
    try {
      setIsLoading(true);
      if (internet) {
        const data = await getUserPostsById(userId);
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
  const getUserInfo = async () => {
    try {
      setIsLoading(true);
      if (internet) {
        const data = await getUserInfoById(userId);
        setUser(data.user);
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
    getUserPosts();
    getUserInfo();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
    console.log("modal opened");
  };

  const closeModal = () => {
    setIsOpen(false);
    console.log("modal closed");
  };
  const path = "https://crashline.onrender.com/";
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 offset-md-3 offset-lg-2  col-12">
            <div className=" container-fluid mt-2">
              <div className="row ">
                <div className="col-3 centred">
                  <div className="">
                    <img
                      className="rounded-circle ms-5"
                      src={path + user.picture }
                      alt="profilePhoto"
                      width={140}
                      height={140}
                    />
                  </div>
                </div>
                <div className="col-7  offset-2">
                  <div className="row ">
                    <div className="col-sm-3 offset-1 col-12">
                      <span className="t-color fw-bold">
                        {user.firstName} {user.lastName}
                      </span>
                    </div>
                    <div className="col-sm-4 col-xs-4 col-12 ">
                      <button
                        className="btn one btn-dark bg-trash btn-sm w-100 p-0 "
                        style={{ backgroundColor: "#6936F5" }}
                        onClick={openModal}
                      >
                        Edit profile
                      </button>
                    </div>
                    <EditProfile isOpen={isOpen} onClose={closeModal} />
                    <div className=" col-sm-4 col-xs-4 col-12 ">
                      <button
                        className="btn one btn-dark btn-sm w-100 p-0 bg-trash"
                        style={{ backgroundColor: "#6936F5" }}
                      >
                        Share profile
                      </button>
                    </div>
                  </div>
                  <div className="pff row  mt-1">
                    <div className="col-3  t-color text-center">
                      <span>Posts {posts.length}</span>
                    </div>
                    <div className="col-4 t-color text-center">
                      <span>Followers 0</span>
                    </div>{" "}
                    <div className="col-4 t-color text-center">
                      <span>Following 0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4 mb-4">
                <div className="col-2 ms-2  "></div>
              </div>
              <div className="row centred">
                <div className="col-12">
                  <div className="row centred mb-2 pe-1 ps-1">
                    {posts.map((post) => (
                      <div className="col-lg-4 ">
                        <PostCard
                          key={post._id}
                          p={post}
                          user={user}
                          getUserPosts={getUserPosts}
                        />
                      </div>
                    ))}
                    <div className="container mt-5">
                      <div className="row">
                        <div className="col"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
