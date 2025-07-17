import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { saveToken } from '@/utils/auth';
import axiosWrapper from '@/utils/api';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface LoginResponse {
  token: string;
  user: User;
}

export const loginUser = createAsyncThunk<LoginResponse, { email: string; password: string }>(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<LoginResponse>('/api/auth/login', { email, password });
      saveToken(data.token);
      return data;
    } catch (err: any) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data.error || 'Login failed');
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);


export const registerUser = createAsyncThunk<{ message: string }, { name: string; email: string; password: string; companyName: string; phoneNumber: string; zipCode: string }>(
  'auth/registerUser',
  async (
    { name, email, password, companyName, phoneNumber, zipCode },
    { rejectWithValue }
  ) => {
    try {
      const data = await axiosWrapper('post', `/api/auth/register`, {
        name,
        email,
        password,
        companyName,
        phoneNumber,
        zipCode,
      });
      return data as { message: string };
    } catch (err: any) {
      console.log(err.error);
      
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data.error || 'Registration failed');
      }else if(err.error){
        return rejectWithValue(err.error);
      }else{
      return rejectWithValue('An unexpected error occurred during registration');
      }
    }
  }
);