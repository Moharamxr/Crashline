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
    console.log(token);
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
    console.log(token);
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
    console.log(token);
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
    console.log("Post added successfully");
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
    console.log(token);
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
    console.log("Post updated successfully");
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
    console.log(token);
    const response = await axios.delete(
      `https://crashline.onrender.com/posts/${id}`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Post deleted successfully");
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
    console.log(token);
    console.log(id);
    const response = await axios.post(
      `https://crashline.onrender.com/posts/like/${id}`,{},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Post Liked successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.response.data.error);
    throw error;
  }
};
export const addComment = async (id, content) => {
  try {
    console.log(token);
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
    console.log("Comment added successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.response.data.error);
    throw error;
  }
};


// const formData = new FormData();
//     formData.append("addressLine", updatedAddress.addressLine);
//     formData.append("country", updatedAddress.country);
//     formData.append("city", updatedAddress.city);
//     formData.append("state", updatedAddress.state);
//     formData.append("postalCode", updatedAddress.postalCode);
//     formData.append("phone", updatedAddress.phone);