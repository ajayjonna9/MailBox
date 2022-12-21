import React, { useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";
import MailPageFooterIcons from "./MailPageFooterIcons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { emailActions } from "../Store/Reducers/EmailReducer";

const MailPageBody = () => {
  const id = useSelector((state) => state.email.id);
  const dispatcher = useDispatch();
  const email = useRef();
  const subject = useRef();
  const message = useRef();
  const onsubmit = (e) => {
    e.preventDefault();
    const obj = {
      email: email.current.value,
      subject: subject.current.value,
      message: message.current.value,
    };
    dispatcher(emailActions.addEmailToLocal(obj));
    console.log(obj);

    // async function postData() {
    //     const res=await axios.post("https://mailbox-d4b6e-default-rtdb.firebaseio.com/",)
    // }
  };
  return (
    <div>
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
          rows="12"
          ref={message}
          required
        />
        <div className="d-flex flex-row">
          <Button variant="success" type="submit" className="mt-4 mb-5">
            submit
          </Button>
          <MailPageFooterIcons />
        </div>
      </Form>
    </div>
  );
};

export default MailPageBody;
