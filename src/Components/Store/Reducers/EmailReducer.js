import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  emailarr: [
    {
      id: 1,
      message: "hello this is email",
      subject: "test",
      email: "jonna@gmail.com",
    },
    {
      id: 2,
      message: "hello this is email",
      subject: "test",
      email: "jonna@gmail.com",
    },
  ],
  clickedId: null,
  isread: [false, false],
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
      state.isread[state.id] = false;
      state.id += 1;
    },
    setRead: (state, action) => {
      state.isread[action.payload] = true;
      state.clickedId = Number(action.payload);
    },
  },
});
const emailActions = emailSlice.actions;
const emailReducer = emailSlice.reducer;
export default emailReducer;
export { emailActions };
