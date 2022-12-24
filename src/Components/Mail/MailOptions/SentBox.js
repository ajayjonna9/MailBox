import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./MailOptions.css";
const SentBox = () => {
  const navigator = useNavigate();
  const onClickSentBox = () => {
    navigator("/sent");
  };
  return (
    <Button className="mailoptions mailbuttons" onClick={onClickSentBox}>
      SentBox
    </Button>
  );
};

export default SentBox;
