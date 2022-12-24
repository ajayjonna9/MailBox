import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isCompose: false,
  selectOption: { inbox: true, sentbox: false },
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
      state.selectOption.inbox = false;
      state.selectOption.sentbox = true;
    },
    setInBox: (state) => {
      state.selectOption.inbox = true;
      state.selectOption.sentbox = false;
    },
  },
});
const mailActions = mailSlice.actions;
const mailReducer = mailSlice.reducer;
export default mailReducer;
export { mailActions };
