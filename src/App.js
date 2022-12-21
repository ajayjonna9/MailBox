import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/SignUp/Signup";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import Forgetpassword from "./Components/ForgetPassWord/ForgetPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgetpassword" element={<Forgetpassword />}></Route>
      </Routes>
    </>
  );
}

export default App;
