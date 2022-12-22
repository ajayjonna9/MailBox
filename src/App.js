import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/SignUp/Signup";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import Forgetpassword from "./Components/ForgetPassWord/ForgetPassword";

import MailPage from "./Components/Mail/MailPage";
import MailPageHeader from "./Components/Mail/MailPageHeader";
import MailMainPage from "./Components/Mail/MailMainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgetpassword" element={<Forgetpassword />}></Route>
        <Route path="/mailpage" element={<MailPage />}></Route>
        <Route path="/mail" element={<MailPageHeader />}></Route>
        <Route path="/home" element={<MailMainPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
