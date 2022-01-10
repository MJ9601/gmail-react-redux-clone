import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mail: null,
  status: "idle",
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setMail: (state, action) => {
      state.mail = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
});

export const { setMail } = mailSlice.actions;

export const selectMail = (state) => state.mail.mail;

export default mailSlice.reducer;
