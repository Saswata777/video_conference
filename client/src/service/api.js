import axios from 'axios';
const URL = "http://localhost:8000"; 

export const addUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/signup`, data);
    return response;
  } catch (error) {
    console.log("While connecting the API", error);
    return error.response;  // Return the error response if the request fails
  }
}

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/login`, data);
    return response;
  } catch (error) {
    console.log("While connecting the API", error);
    return error.response;  // Return the error response if the request fails
  }
}

export const logoutUser = async () => {
    try {
      const response = await axios.post(`${URL}/logout`);
      return response;
    } catch (error) {
      console.log("While connecting the API", error);
      return error.response;  // Return the error response if the request fails
    }
  }