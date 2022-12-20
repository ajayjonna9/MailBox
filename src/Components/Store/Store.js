import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/AuthReducer";
const Store = configureStore({
  reducer: { auth: authReducer },
});
export default Store;
