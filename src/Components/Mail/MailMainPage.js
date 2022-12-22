import React, { useEffect } from "react";
import Header from "./Header/Header";
import MailOptions from "./MailOptions/MailOptions";
import MailScreen from "./MailScreen.js/MailScreen";
import { useSelector } from "react-redux";
import axios from "axios";
let isFirst = true;

const MailMainPage = () => {
  const maildata = useSelector((state) => state.email);
  const userID = useSelector((state) => state.auth.userID);

  useEffect(() => {
    if (isFirst) {
      isFirst = false;
      async function getData() {
        try {
          const res = await axios.get(
            `https://mailbox-d4b6e-default-rtdb.firebaseio.com/${userID}.json`
          );
          console.log(res);
        } catch {
          alert("somthing Wrong");
        }
      }
      getData();
      return;
    }
    async function postData() {
      try {
        const res = await axios.put(
          `https://mailbox-d4b6e-default-rtdb.firebaseio.com/${userID}.json`,
          maildata
        );
        console.log(res);
      } catch {
        alert("somthing Wrong");
      }
    }
    postData();
  }, [maildata]);
  return (
    <div>
      <Header />
      <div className="d-flex flex-row">
        <MailOptions />
        <MailScreen />
      </div>
    </div>
  );
};

export default MailMainPage;
