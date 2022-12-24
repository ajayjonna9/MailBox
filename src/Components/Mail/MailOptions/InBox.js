import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./MailOptions.css";

const InBox = () => {
  const navigator = useNavigate();
  const onClickInbox = () => {
    navigator("/home");
  };
  return (
    <Button className="mailoptions mailbuttons" onClick={onClickInbox}>
      InBox
    </Button>
  );
};

export default InBox;
