import logo from "./logo.svg";
import React, { useEffect } from "react";

import "./App.css";
import Signup from "./Components/SignUp/Signup";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import Forgetpassword from "./Components/ForgetPassWord/ForgetPassword";

import MailMainPage from "./Components/Mail/MailMainPage";
import ExpandMail from "./Components/Mail/MailScreen.js/ExpandMail";
import ExpandMain from "./Components/Mail/MailScreen.js/ExpandMain";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { emailActions } from "./Components/Store/Reducers/EmailReducer";
let isFirst = true;
const arr = [1, 2, 3, 4];
function App() {
  const readarr = useSelector((state) => state.email.isread);
  const clickedid = useSelector((state) => state.email.clickedId);
  const userID = useSelector((state) => state.auth.userID);
  const emaildata = useSelector((state) => state.email);
  const dispatcher = useDispatch();

  useEffect(() => {
    if (isFirst) {
      isFirst = false;
      async function getData() {
        try {
          const res = await axios.get(
            `https://mailbox-d4b6e-default-rtdb.firebaseio.com/${userID}.json`
          );
          console.log("fetch", res);
          if (res.data !== null) {
            for (let i in res.data.sent) {
              const obj = {
                ...res.data.sent[i],
                id: i,
              };
              console.log(obj);

              dispatcher(emailActions.addEmailToLocal(obj));
              console.log("hi");
            }
            console.log("emaildata...", res.data.emaildata);
            dispatcher(emailActions.dataFromDB(res.data.emaildata));
          }
        } catch {
          alert("somthing Wrong...");
        }
      }
      getData();
      return;
    }
    async function postData() {
      const obj = {
        readarr: readarr,
        clickedid: clickedid,
      };
      try {
        const res = await axios.put(
          `https://mailbox-d4b6e-default-rtdb.firebaseio.com/${userID}/emaildata.json`,
          obj
        );
        console.log(res);
      } catch {
        alert("somthing Wrong");
      }
    }
    postData();
  }, [emaildata]);
  return (
    <div className="hi">
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgetpassword" element={<Forgetpassword />}></Route>

        <Route path="/home" element={<MailMainPage />}></Route>
        <Route path="/:id" element={<ExpandMain />}></Route>
      </Routes>
    </div>
  );
}

export default App;
