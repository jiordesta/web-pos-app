import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    success: (_state, action) => {
      return toast.success(action.payload);
    },
    error: (_state, action) => {
      return toast.error(action.payload);
    },
  },
});

export const { success, error } = notificationSlice.actions;

export default notificationSlice.reducer;