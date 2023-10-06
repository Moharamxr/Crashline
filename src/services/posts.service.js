import axios from "axios";

const cookies = document.cookie.split("; ");
let token = "";
for (let i = 0; i < cookies.length; i++) {
  const cookie = cookies[i].split("=");
  if (cookie[0] === "token") {
    token = cookie[1];
    break;
  }
}
export const getPosts = async () => {
  try {
    const response = await axios.get(
      "https://crashline.onrender.com/posts",

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Posts fetched successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.response.data.error);
    throw error;
  }
};
export const getPostById = async (id) => {
  try {
    const response = await axios.get(
      `https://crashline.onrender.com/posts/${id}`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("PostById fetched successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.response.data.error);
    throw error;
  }
};

export const addPost = async (newPostData) => {
  try {
    console.log(newPostData.image);
    const formData = new FormData();
    formData.append("title", newPostData.title);
    formData.append("content", newPostData.content);
    formData.append("image", newPostData.image);
    const response = await axios.post(
      `https://crashline.onrender.com/posts`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.message);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.response.data.error);
    throw error;
  }
};
export const updatePost = async (id, formData) => {
  try {
    const response = await axios.put(
      `https://crashline.onrender.com/posts/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.message);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.response.data.error);
    throw error;
  }
};
export const deletePost = async (id) => {
  try {
    const response = await axios.delete(
      `https://crashline.onrender.com/posts/${id}`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.message);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.response.data.error);
    throw error;
  }
};
export const addLike = async (id) => {
  try {
    console.log(id);
    const response = await axios.post(
      `https://crashline.onrender.com/posts/like/${id}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    console.log(response.data.message);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.response.data.error);
    throw error;
  }
};

export const addComment = async (id, content) => {
  console.log(id)
  console.log(token)
  try {
    const response = await axios.post(
      `https://crashline.onrender.com/posts/comment/${id}`,
      content,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.message);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.response.data.error);
    throw error;
  }
};
