import axios from "axios";

export const login = async (loginData) => {
  try {
    const response = await axios.post(
      'https://crashline.onrender.com/login',
      loginData,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify(loginData));
    localStorage.setItem('LoginErrorMessage', '');
    // localStorage.setItem('authToken',response.data.token);
    // localStorage.setItem('role',response.data.role)

    // console.log(response.data.token);
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    localStorage.setItem('LoginErrorMessage', error.response.data.message);
    // localStorage.setItem('authToken','')
    throw error;
  }
};

export const register = async (registerData) => {
  let response;
  try {
     response = await axios.post(
      'https://crashline.onrender.com/register',
      registerData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
    localStorage.setItem('RegisterErrorMessage', '');
    return response.data;
  } catch (error) {
    console.error(error);
    localStorage.setItem('RegisterErrorMessage', error.response.data.message);
    throw error;
  }
};
