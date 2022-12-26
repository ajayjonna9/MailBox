import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isCompose: false,
  selectOption:
    localStorage.getItem("mailoptions") ||
    JSON.stringify({
      inbox: true,
      sentbox: false,
    }),
};
const mailSlice = createSlice({
  name: "mail",
  initialState: initialState,
  reducers: {
    setCompose: (state) => {
      state.isCompose = true;
    },
    resetCompose: (state) => {
      state.isCompose = false;
    },

    setSentBox: (state) => {
      localStorage.setItem(
        "mailoptions",
        JSON.stringify({ inbox: false, sentbox: true })
      );
      state.selectOption = JSON.stringify({ inbox: false, sentbox: true });
    },

    setInBox: (state) => {
      localStorage.setItem(
        "mailoptions",
        JSON.stringify({ inbox: true, sentbox: false })
      );
      state.selectOption = JSON.stringify({ inbox: true, sentbox: false });
    },
    setingMailOptions: (state) => {
      localStorage.setItem(
        "mailoptions",
        JSON.stringify({ inbox: true, sentbox: false })
      );
      state.selectOption = JSON.stringify({ inbox: true, sentbox: false });
    },
  },
});
const mailActions = mailSlice.actions;
const mailReducer = mailSlice.reducer;
export default mailReducer;
export { mailActions };
