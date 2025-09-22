import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../axiosInstance';

export const login = createAsyncThunk(
  'authentication/login',
  async (credential: { username: string; password: string }) => {
      const response = await axiosInstance.post('authentication/login', credential)
      return response.data
  }
)

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    accessToken: null,
    refreshToken: null,
    user: null,
    isFetchingUser: false,
    isLoggingIn: false
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
      .addCase(login.rejected, (state, action) => {
        state.isLoggingIn = false
      })
  },
})

export default authenticationSlice.reducer
