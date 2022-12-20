import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
});
const authActions = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
export { authActions };
