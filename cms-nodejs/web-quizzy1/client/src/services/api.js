// api.js
import axios from 'axios';

export const ROOT_URL = "localhost";
export const API_URL_IMAGE = `http://${ROOT_URL}:8080/api/images/`;
const API_URL = `http://${ROOT_URL}:8080/api`; // Replace with your API URL
axios.defaults.baseURL = `http://${ROOT_URL}:8080`; // Replace with your backend API's base URL

// Add the following lines to set the CORS headers
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // Replace '*' with the allowed origin(s) of your backend API
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'; // Specify the allowed HTTP methods
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'; // Specify the allowed headers

export const isAuthenticated = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      // Make an API request to find the user based on the token
      const response = await axios.get(`${API_URL}/user/findToken?token=${token}`, { withCredentials:true,
        
      },);
      const user = response.data.data;
      if (user) {
        // Additional checks if needed
        return true;
      } else {
        return false;
      }
    } catch (error) {
      // API request or validation failed
      return false;
    }
  }
  return false; // No token found
};

export const loginRequest = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, {
      username,
      password,
    },{
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Replace '*' with your server domain if known
      },
    });
    if(response.data.success === 200){
      console.log("AAAAAAAAAAAAAAAAAA");
      const token = response.data.message;
      localStorage.setItem("token", token);
      return response.data;
    }else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const signUpRequest = async (username, password, email, phone) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, {
      username,
      password,
      email,
      phone
    },{
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Replace '*' with your server domain if known
      },
    });
    if(response.data.success === 200){
      console.log("AAAAAAAAAAAAAAAAAA");
      const token = response.data.message;
      localStorage.setItem("token", token);
      return response.data;
    }else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
export const getUsers = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("token", token);
    const response = await axios.post(`${API_URL}/user/findAll?token=${token}`);
    console.log("response", response)
    return response.data.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const getUserFromToken = async (token) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/user/findByToken`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const createUser = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("token", token);
    const response = await axios.post(`${API_URL}/user/insert?token=${token}`);
    console.log("response", response)
    return response.data.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const deleteUser = async (userID) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/user/delete?token=${token}&id=${userID}`)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/user/update?token=${token}`, userData)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getQuestions = async () => {
  try {
    const response = await axios.post(`${API_URL}/question/findAll`);
    console.log("response", response);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

export const getAnswers = async () => {
  try {
    const response = await axios.post(`${API_URL}/answer/findAll`);
    console.log("response", response);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching answers:', error);
    throw error;
  }
}
export const getTopicQuestion = async () => {
  try {
    const response = await axios.post(`${API_URL}/topicQuestion/findAll`);
    console.log("response", response);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching answers:', error);
    throw error;
  }
}
export const getCategoryQuestion = async () => {
  try {
    const response = await axios.post(`${API_URL}/categoryQuestion/findAll`);
    console.log("response", response);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching answers:', error);
    throw error;
  }
}

export const createQuestion = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("token", token);
    const response = await axios.post(`${API_URL}/question/insert?token=${token}`);
    console.log("response", response)
    return response.data.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const deleteQuestion = async (userID) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/question/delete?token=${token}&id=${userID}`)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateQuestion = async (userData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/question/update?token=${token}`, userData)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const convertDateFormat = (inputDate) => {
  let inputDateString = inputDate + "";
  const year = inputDateString.substring(0, 4);
  const month = inputDateString.substring(4, 6);
  const day = inputDateString.substring(6, 8);
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
// Add more API functions as needed