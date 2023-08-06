import axios from 'axios';

const API_BASE_URL = 'https://api.mockapi.io'; 

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/users', userData); 
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.get('/users', {
      params: {
        email: credentials.email,
        password: credentials.password,
      },
    }); 
    return response.data[0]; 
  } catch (error) {
    throw error.response.data;
  }
};

