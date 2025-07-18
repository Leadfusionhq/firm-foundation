import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { saveToken } from '@/utils/auth';
import axiosWrapper from '@/utils/api';
import { API_URL } from '@/utils/apiUrl';

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
      const { data } = await axios.post<LoginResponse>(API_URL.LOGIN_USER, { email, password });
      saveToken(data.token);
      return data;
    } catch (err: unknown) {
      function isAxiosErrorWithResponse(error: unknown): error is { response: { data: { error?: string } } } {
        return (
          typeof error === 'object' &&
          error !== null &&
          'response' in error &&
          typeof (error as { response?: unknown }).response === 'object' &&
          (error as { response?: unknown }).response !== null &&
          'data' in (error as { response?: { data?: unknown } }).response!
        );
      }
      if (isAxiosErrorWithResponse(err)) {
        return rejectWithValue((err.response.data as { error?: string }).error || 'Login failed');
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
      const data = await axiosWrapper('post', API_URL.REGISTER_USER, {
        name,
        email,
        password,
        companyName,
        phoneNumber,
        zipCode,
      });
      return data as { message: string };
    } catch (err: unknown) {
      function isAxiosErrorWithResponse(error: unknown): error is { response: { data: { error?: string } } } {
        return (
          typeof error === 'object' &&
          error !== null &&
          'response' in error &&
          typeof (error as { response?: unknown }).response === 'object' &&
          (error as { response?: unknown }).response !== null &&
          'data' in (error as { response?: { data?: unknown } }).response!
        );
      }
      function hasErrorProp(error: unknown): error is { error: string } {
        return (
          typeof error === 'object' &&
          error !== null &&
          'error' in error
        );
      }
      if (hasErrorProp(err)) {
        console.log(err.error);
      }
      if (isAxiosErrorWithResponse(err)) {
        return rejectWithValue((err.response.data as { error?: string }).error || 'Registration failed');
      } else if (hasErrorProp(err)) {
        return rejectWithValue(err.error);
      } else {
        return rejectWithValue('An unexpected error occurred during registration');
      }
    }
  }
);