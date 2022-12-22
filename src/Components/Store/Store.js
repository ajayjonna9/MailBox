import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/AuthReducer";
import emailReducer from "./Reducers/EmailReducer";
import mailReducer from "./Reducers/MailactionsReducer";
const Store = configureStore({
  reducer: { auth: authReducer, email: emailReducer, mailactions: mailReducer },
});
export default Store;
