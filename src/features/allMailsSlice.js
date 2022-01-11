import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMails: [],
  mailList: [],
  status: "idle",
};

export const mailsSlice = createSlice({
  name: "mails",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAllMails: (state, action) => {
      state.allMails = action.payload;
    },
    setMailList: (state, action) => {
      state.mailList = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
});

export const { setAllMails, setMailList } = mailsSlice.actions;

export const selectAllMails = (state) => state.mails.allMails;
export const selectMailList = (state) => state.mails.mailList;

export default mailsSlice.reducer;
