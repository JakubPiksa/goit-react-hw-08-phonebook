import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../../api';

export const register = createAsyncThunk('auth/register', async (userData) => {
  try {
    const response = await registerUser(userData);
    return response;
  } catch (error) {
    throw error;
  }
});

export const login = createAsyncThunk('auth/login', async (credentials) => {
  try {
    const response = await loginUser(credentials);
    return response;
  } catch (error) {
    throw error;
  }
});

// Define other authentication operations here as needed
