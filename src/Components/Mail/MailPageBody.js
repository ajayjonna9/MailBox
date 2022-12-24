import React, { useRef } from "react";
import { Card, Form, Button, CloseButton } from "react-bootstrap";
import MailPageFooterIcons from "./MailPageFooterIcons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { emailActions } from "../Store/Reducers/EmailReducer";
import "./MailPage.css";
import { mailActions } from "../Store/Reducers/MailactionsReducer";

const MailPageBody = () => {
  const id = useSelector((state) => state.email.id);
  const userid = useSelector((state) => state.auth.userID);
  const dispatcher = useDispatch();
  const email = useRef();
  const subject = useRef();
  const message = useRef();
  const onClose = () => {
    dispatcher(mailActions.resetCompose());
  };
  const onsubmit = (e) => {
    e.preventDefault();
    const obj = {
      emailTo: email.current.value,
      subject: subject.current.value,
      message: message.current.value,
    };
    const senderobj = {
      subject: subject.current.value,
      message: message.current.value,
      emailfrom: userid,
    };

    console.log(obj);
    const RegEx = /^[a-z0-9]+$/i;
    let newMail = "";
    for (let i = 0; i < email.current.value.length; i++) {
      if (RegEx.test(email.current.value[i])) {
        newMail = newMail + email.current.value[i];
      }
    }

    async function postData() {
      try {
        const res = await axios.post(
          `https://mailbox-d4b6e-default-rtdb.firebaseio.com/${newMail}/inbox.json`,
          senderobj
        );
        console.log(res);
        const resdata = await axios.post(
          `https://mailbox-d4b6e-default-rtdb.firebaseio.com/${userid}/sent.json`,
          obj
        );
        console.log(res);
        console.log(resdata);
        const newobj = {
          ...obj,
          id: resdata.data.name,
        };
        dispatcher(emailActions.addEmailToLocal(newobj));
      } catch (err) {
        alert("somthing Wromg");
      }
    }
    postData();
  };
  return (
    <div>
      <CloseButton className="closebutton" onClick={onClose} />
      <Form onSubmit={onsubmit}>
        <Form.Control
          type="email"
          placeholder="Enter email"
          ref={email}
          required
        />

        <Form.Control
          type="text"
          placeholder="Subject"
          ref={subject}
          className="mt-2 "
          required
        />

        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          className="mt-2 h-auto"
          rows="8"
          ref={message}
          required
        />
        <div className="d-flex flex-row">
          <Button variant="success" type="submit" className="mt-4 mb-1">
            submit
          </Button>
          <MailPageFooterIcons />
        </div>
      </Form>
    </div>
  );
};

export default MailPageBody;
