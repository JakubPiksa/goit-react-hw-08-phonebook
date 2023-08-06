import axios from 'axios';

const registerUser = async (userData) => {
  try {
    const response = await axios.post('/api/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const loginUser = async (userData) => {
  try {
    const response = await axios.post('/api/login', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { registerUser, loginUser };
