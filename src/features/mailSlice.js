import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mail: null,
  sendMail: false,
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
    sendMailOpen: (state) => {
      state.sendMail = true;
    },
    sendMailClose: (state) => {
      state.sendMail = false;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
});

export const { setMail, sendMailClose, sendMailOpen } = mailSlice.actions;

export const selectMail = (state) => state.mail.mail;
export const selectSendMail = (state) => state.mail.sendMail;

export default mailSlice.reducer;
