import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  emailarr: [],
  sentMailarr: [],
  clickedId: localStorage.getItem("clickedid"),
  isread: [],
  id: 0,
};
const emailSlice = createSlice({
  name: "email",
  initialState: initialState,
  reducers: {
    addEmailToLocal: (state, action) => {
      console.log("hello");
      if (action.payload === null) {
        state.emailarr = [];
      } else {
        state.emailarr.push(action.payload);
      }
    },
    setRead: (state, action) => {
      const index = state.emailarr.findIndex(
        (item) => item.id === action.payload
      );
      state.isread[index] = true;
      state.clickedId = index;
      localStorage.setItem("clickedid", index);
      console.log(index);
    },
    dataFromDB: (state, action) => {
      state.isread = action.payload.readarr || [];
    },
    addSentmailtoLocal: (state, action) => {
      state.sentMailarr.push(action.id);
    },
    deleteMail: (state, action) => {
      const index = state.emailarr.findIndex(
        (item) => item.id === action.payload
      );
      const newarr = state.emailarr.filter(
        (item) => item.id !== action.payload
      );
      state.emailarr = [...newarr];
      const newread = state.isread.filter((item, ind) => ind !== index);
      state.isread = [...newread];
    },
  },
});
const emailActions = emailSlice.actions;
const emailReducer = emailSlice.reducer;
export default emailReducer;
export { emailActions };
