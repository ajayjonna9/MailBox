import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { mailActions } from "../../Store/Reducers/MailactionsReducer";
import "./MailOptions.css";

const InBox = () => {
  const navigator = useNavigate();
  const dispatcher = useDispatch();

  const inbox = useSelector((state) => state.mailactions.selectOption.inbox);
  const onClickInbox = () => {
    navigator("/home");
    dispatcher(mailActions.setInBox());
  };
  return (
    <Button
      className={
        inbox ? "mailoptions mailbuttons onclickbtn" : "mailoptions mailbuttons"
      }
      onClick={onClickInbox}
    >
      InBox
    </Button>
  );
};

export default InBox;
