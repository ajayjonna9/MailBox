import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isCompose: false,
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
  },
});
const mailActions = mailSlice.actions;
const mailReducer = mailSlice.reducer;
export default mailReducer;
export { mailActions };
