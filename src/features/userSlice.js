import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    LOGOUT: (state) => {
      state.user = null;
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    LOGIN: (state, action) => {
      state.user = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
});

export const { LOGOUT, LOGIN } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
