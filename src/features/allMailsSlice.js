import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMails: [],
  status: "idle",
};

export const allMailsSlice = createSlice({
  name: "allMails",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setallMails: (state, action) => {
      state.allMails = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
});

export const { setallMails } = allMailsSlice.actions;

export const selectallMails = (state) => state.allMails.allMails;

export default allMailsSlice.reducer;
