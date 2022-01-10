import { configureStore } from "@reduxjs/toolkit";
import allMailsReducer from "../features/allMailsSlice";
import mailListReducer from "../features/mailListSlice";
import userReducer from "../features/userSlice";
import mailReducer from "../features/mailSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
    mailList: mailListReducer,
    allMails: allMailsReducer,
  },
});
