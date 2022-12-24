import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sentMailarr: [],
  inboxMailarr: [],
  clickedId: localStorage.getItem("clickedid"),
  sentMailRead: [],
  inBoxMailRead: [],
  id: 0,
};
const emailSlice = createSlice({
  name: "email",
  initialState: initialState,
  reducers: {
    addSentEmailToLocal: (state, action) => {
      console.log("hello");
      if (action.payload === null) {
        state.sentMailarr = [];
      } else {
        state.sentMailarr.push(action.payload);
      }
    },
    setSentMailRead: (state, action) => {
      const index = state.sentMailarr.findIndex(
        (item) => item.id === action.payload
      );
      state.sentMailRead[index] = true;
      state.clickedId = index;
      localStorage.setItem("clickedid", index);
      console.log(index);
    },
    dataFromDB: (state, action) => {
      state.sentMailRead = action.payload.sentBoxReadarr || [];
      state.inBoxMailRead = action.payload.inBoxReadarr || [];
    },
    addInboxmailtoLocal: (state, action) => {
      if (action.payload === null) {
        state.inboxMailarr = [];
      } else {
        state.inboxMailarr.push(action.payload);
      }
    },
    setInboxMailRead: (state, action) => {
      const index = state.inboxMailarr.findIndex(
        (item) => item.id === action.payload
      );
      state.inboxMailarr[index] = true;
      state.clickedId = index;
      localStorage.setItem("clickedid", index);
      console.log(index);
    },

    deleteSentMail: (state, action) => {
      const index = state.sentMailarr.findIndex(
        (item) => item.id === action.payload
      );
      const newarr = state.sentMailarr.filter(
        (item) => item.id !== action.payload
      );
      state.sentMailarr = [...newarr];
      const newread = state.sentMailRead.filter((item, ind) => ind !== index);
      state.sentMailRead = [...newread];
    },
    deleteInboxMail: (state, action) => {
      const index = state.inboxMailarr.findIndex(
        (item) => item.id === action.payload
      );
      const newarr = state.inboxMailarr.filter(
        (item) => item.id !== action.payload
      );
      state.inboxMailarr = [...newarr];
      const newread = state.inBoxMailRead.filter((item, ind) => ind !== index);
      state.inBoxMailRead = [...newread];
    },
  },
});
const emailActions = emailSlice.actions;
const emailReducer = emailSlice.reducer;
export default emailReducer;
export { emailActions };
