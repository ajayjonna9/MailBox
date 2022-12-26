import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sentMailarr: [],
  inboxMailarr: [],
  clickedId: localStorage.getItem("clickedid"),

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
        const index = state.sentMailarr.find(
          (item) => item.id === action.payload.id
        );
        if (!index) {
          const newarr = [action.payload, ...state.sentMailarr];
          // state.sentMailarr.push(action.payload);
          state.sentMailarr = newarr;
        }
      }
    },
    setSentMailRead: (state, action) => {
      const index = state.sentMailarr.findIndex(
        (item) => item.id === action.payload
      );
      // state.sentMailRead[index] = true;
      state.clickedId = index;
      localStorage.setItem("clickedid", index);
      console.log(index);
    },
    dataFromDB: (state, action) => {
      // state.sentMailRead = action.payload.sentBoxReadarr || [];
      state.inBoxMailRead = action.payload || [];
    },
    addInboxmailtoLocal: (state, action) => {
      if (action.payload === null) {
        state.inboxMailarr = [];
      } else {
        const index = state.inboxMailarr.find(
          (item) => item.id === action.payload.id
        );
        if (!index) {
          const newarr = [action.payload, ...state.inboxMailarr];
          // state.inboxMailarr.push(action.payload);
          state.inboxMailarr = newarr;
        }
      }
    },
    setInboxMailRead: (state, action) => {
      const index = state.inboxMailarr.findIndex(
        (item) => item.id === action.payload
      );
      const element = state.inBoxMailRead.find(
        (item) => item.id === action.payload
      );
      if (!element) {
        const newobj = {
          id: action.payload,
          isRead: true,
        };
        state.inBoxMailRead = [newobj, ...state.inBoxMailRead];
        // state.inBoxMailRead[index] = true;
      }

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
      // const newread = state.sentMailRead.filter((item, ind) => ind !== index);
      // state.sentMailRead = [...newread];
    },
    deleteInboxMail: (state, action) => {
      const index = state.inboxMailarr.findIndex(
        (item) => item.id === action.payload
      );
      const newarr = state.inboxMailarr.filter(
        (item) => item.id !== action.payload
      );
      state.inboxMailarr = [...newarr];
      const newread = state.inBoxMailRead.filter(
        (item, ind) => item.id !== action.payload
      );
      state.inBoxMailRead = [...newread];
    },
    onLogoutEmail: (state) => {
      state.sentMailarr = [];
      state.inboxMailarr = [];
      state.inBoxMailRead = [];
    },
  },
});
const emailActions = emailSlice.actions;
const emailReducer = emailSlice.reducer;
export default emailReducer;
export { emailActions };
