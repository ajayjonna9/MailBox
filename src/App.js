import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/SignUp/Signup";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import Forgetpassword from "./Components/ForgetPassWord/ForgetPassword";

import MailMainPage from "./Components/Mail/MailMainPage";
import ExpandMail from "./Components/Mail/MailScreen.js/ExpandMail";
import ExpandMain from "./Components/Mail/MailScreen.js/ExpandMain";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgetpassword" element={<Forgetpassword />}></Route>

        <Route path="/home" element={<MailMainPage />}></Route>
        <Route path="/:id" element={<ExpandMain />}></Route>
      </Routes>
    </>
  );
}

export default App;
