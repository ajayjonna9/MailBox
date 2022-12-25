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
  const inboxarr = useSelector((state) => state.email.inboxMailarr);
  const readarr = useSelector((state) => state.email.inBoxMailRead);
  const count = inboxarr.length - readarr.length;
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
      InBox<span className="inboxcount">{count}</span>
    </Button>
  );
};

export default InBox;
