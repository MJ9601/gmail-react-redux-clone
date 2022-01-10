import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mailList: [],
  status: "idle",
};

export const mailListSlice = createSlice({
  name: "mailList",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setmailList: (state, action) => {
      state.mailList = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
});

export const { setmailList } = mailListSlice.actions;

export const selectmailList = (state) => state.mailList.mailList;

export default mailListSlice.reducer;
