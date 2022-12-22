import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { mailActions } from "../../Store/Reducers/MailactionsReducer";
import "./MailOptions.css";

const Compose = () => {
  const dispatcher = useDispatch();
  const onclickCompose = () => {
    dispatcher(mailActions.setCompose());
  };
  return (
    <Button className="mailoptions" onClick={onclickCompose}>
      {" "}
      Compose
    </Button>
  );
};

export default Compose;
