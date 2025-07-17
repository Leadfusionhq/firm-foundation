// redux/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authActions';

interface User {
  id: string;
  email: string;
  role: string;
  name?: string;
}

interface AuthState {
  loading: boolean;
  user: User | null;
  token: string | null;
  error: string | null;
  success: boolean;
  message: string | null;
}

const initialState: AuthState = {
  loading: false,
  user: null,
  token: null,
  error: null,
  success: false,
  message: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.error = null;
      state.loading = false;
      state.success = false;
      state.message = null;
    },
    clearError(state) {
      state.error = null;
    },
    clearSuccess(state) {
      state.success = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login actions
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ token: string; user: User }>) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Register actions
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<{ message: string }>) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, clearError, clearSuccess } = authSlice.actions;
export default authSlice.reducer;
