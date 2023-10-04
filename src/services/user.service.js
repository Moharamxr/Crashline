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

export const getUserPostsById = async (id) => {
  try {
    console.log(token);
    console.log(id)
    const response = await axios.get(
      `https://crashline.onrender.com/profile/${id}`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("User posts fetched successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.response.data.message);
    throw error;
  }
};
export const getUserInfoById = async (id) => {
  try {
    console.log(token);
    const response = await axios.get(
      `https://crashline.onrender.com/profile/user/${id}`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Posts info fetched successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.response.data.message);
    throw error;
  }
};
export const updateUserPicture = async (id, image) => {
  try {
    console.log(token);
    const response = await axios.get(
      `https://crashline.onrender.com/profile/picture/${id}`,
      image,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Profile picture updated successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.response.data.message);
    throw error;
  }
};
export const deleteProfilePicture = async (id) => {
  try {
    console.log(token);
    const response = await axios.get(
      `https://crashline.onrender.com/profile/picture/${id}`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Profile Picture deleted successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.response.data.message);
    throw error;
  }
};
export const updatePassword = async (id, oldPass, newPass) => {
  try {
    console.log(token);
    const response = await axios.get(
      `https://crashline.onrender.com/profile/${id}`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          oldPassword: oldPass,
          newPassword: newPass,
        },
      }
    );
    console.log("Password updated successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.response.data.message);
    throw error;
  }
};
export const updateName = async (id, firstName, lastName) => {
  try {
    console.log(token);
    const response = await axios.get(
      `https://crashline.onrender.com/profile/${id}`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          firstName: firstName,
          lastName: lastName,
        },
      }
    );
    console.log("Name Updated Successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.response.data.message);
    throw error;
  }
};
