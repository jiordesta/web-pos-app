import { configureStore } from "@reduxjs/toolkit";
import notification_slice from "./reducers/notification.slice";
import authentication_slice from "./reducers/authentication.slice";

export const store = configureStore({
  reducer: {
    notif: notification_slice,
    authentication: authentication_slice
  },
});

export type AppDispatch = typeof store.dispatch 
export type RootState = ReturnType<typeof store.getState>;