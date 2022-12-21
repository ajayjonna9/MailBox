import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import MailPageBody from "./MailPageBody";
import "./MailPage.css";
import { useSelector } from "react-redux";
import axios from "axios";
let isFirst = true;
const MailPage = () => {
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
      <Card className="mailpage">
        <Card.Body>
          {/* <MailPageHeader /> */}
          <MailPageBody />
          {/* <MailPageFooter/> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MailPage;
