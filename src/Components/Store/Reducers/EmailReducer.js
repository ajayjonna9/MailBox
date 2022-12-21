import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  emailarr: [],
  id: 0,
};
const emailSlice = createSlice({
  name: "email",
  initialState: initialState,
  reducers: {
    addEmailToLocal: (state, action) => {
      const newObj = {
        ...action.payload,
        id: state.id + 1,
      };
      state.emailarr.push(newObj);
      state.id += 1;
    },
  },
});
const emailActions = emailSlice.actions;
const emailReducer = emailSlice.reducer;
export default emailReducer;
export { emailActions };
