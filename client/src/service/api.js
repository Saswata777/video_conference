import axios from 'axios';
const URL = "http://localhost:8000"; 

export const addUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/add`, data);
    return response;
  } catch (error) {
    console.log("While connecting the API ", error);
    return error.response;  // Return the error response if the request fails
  }
}


// export const getUser = async (roll) => {
//   try {
//     const response = await fetch(`${URL}/user/${roll}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     if (!response.ok) {
//       // Handle HTTP errors
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.log("While connecting the API ", error);
//     return { error: error.message };  // Return the error message if the request fails
//   }
// }