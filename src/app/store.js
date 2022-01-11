import { configureStore } from "@reduxjs/toolkit";
import mailsReducer from "../features/allMailsSlice";
import userReducer from "../features/userSlice";
import mailReducer from "../features/mailSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
    mails: mailsReducer,
  },
});
