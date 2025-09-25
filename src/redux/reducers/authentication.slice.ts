import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../axiosInstance';
import type { UserDetails } from '../../types';

export const login = createAsyncThunk(
  'authentication/login',
  async (credential: { username: string; password: string }, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/authentication/login", credential);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
)

export const register = createAsyncThunk(
  'authentication/register',
  async (userDetails: UserDetails, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/authentication/register", userDetails);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
)

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    accessToken: null,
    refreshToken: null,
    user: null,
    isFetchingUser: false,
    isLoggingIn: false,
    isRegistering: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoggingIn = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggingIn = false
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state) => {
        state.isLoggingIn = false
      })
      .addCase(register.pending, (state) => {
        state.isRegistering = true
      })
      .addCase(register.fulfilled, (state) => {
        state.isRegistering = false
      })
      .addCase(register.rejected, (state) => {
        state.isRegistering = false
      })
  },
})

export default authenticationSlice.reducer
