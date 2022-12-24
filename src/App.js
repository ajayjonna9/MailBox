import logo from "./logo.svg";
import React, { useEffect } from "react";

import "./App.css";
import Signup from "./Components/SignUp/Signup";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import Forgetpassword from "./Components/ForgetPassWord/ForgetPassword";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { emailActions } from "./Components/Store/Reducers/EmailReducer";

import MainMailPage from "./Components/Mail/MainMailPage";
import MainExpand from "./Components/Mail/MainExpand";
import SentMailMainPage from "./Components/Mail/SentMailMainPage";
import SentExpandMain from "./Components/Mail/SentExpandMain";
let isFirst = true;
const arr = [1, 2, 3, 4];
function App() {
  const sentreadarr = useSelector((state) => state.email.sentMailRead);
  const inboxreadarr = useSelector((state) => state.email.inBoxMailRead);
  // const clickedid = useSelector((state) => state.email.clickedId);
  const userID = useSelector((state) => state.auth.userID);
  // const emaildata = useSelector((state) => state.email);
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

              dispatcher(emailActions.addSentEmailToLocal(obj));
              console.log("hi");
            }
            if (res.data.inbox !== null) {
              for (let i in res.data.inbox) {
                const obj = {
                  ...res.data.inbox[i],
                  id: i,
                };
                console.log(obj);

                dispatcher(emailActions.addInboxmailtoLocal(obj));
                console.log("hi");
              }
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
        sentBoxReadarr: sentreadarr,
        inBoxReadarr: inboxreadarr,
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
  }, [sentreadarr, inboxreadarr]);
  return (
    <div className="hi">
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgetpassword" element={<Forgetpassword />}></Route>

        <Route path="/home" element={<MainMailPage />}></Route>
        <Route path="/:id" element={<MainExpand />}></Route>
        <Route path="/sent" element={<SentMailMainPage />}></Route>
        <Route path="/sent/:id" element={<SentExpandMain />}></Route>
      </Routes>
    </div>
  );
}

export default App;
