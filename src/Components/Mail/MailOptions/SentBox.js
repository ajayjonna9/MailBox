import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emailActions } from "../../Store/Reducers/EmailReducer";
import { mailActions } from "../../Store/Reducers/MailactionsReducer";

import "./MailOptions.css";
const SentBox = () => {
  const navigator = useNavigate();
  const dispatcher = useDispatch();
  const mailOptions = useSelector((state) =>
    JSON.parse(state.mailactions.selectOption)
  );
  const sentbox = mailOptions.sentbox;

  const onClickSentBox = () => {
    navigator("/sent");
    console.log(sentbox);
    console.log(mailOptions);
    dispatcher(mailActions.setSentBox());
  };
  return (
    <Button
      className={
        sentbox
          ? "mailoptions mailbuttons onclickbtn"
          : "mailoptions mailbuttons"
      }
      onClick={onClickSentBox}
    >
      SentBox
    </Button>
  );
};

export default SentBox;
