import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/AuthReducer";
import emailReducer from "./Reducers/EmailReducer";
const Store = configureStore({
  reducer: { auth: authReducer, email: emailReducer },
});
export default Store;
