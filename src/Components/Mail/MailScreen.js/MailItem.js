import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emailActions } from "../../Store/Reducers/EmailReducer";
import { mailActions } from "../../Store/Reducers/MailactionsReducer";
import "./MailScreen.css";

const MailItem = (props) => {
  const isRead = useSelector((state) => state.email.isread[props.id]);
  const dispatcher = useDispatch();
  const navigator = useNavigate();
  const setRead = () => {
    dispatcher(emailActions.setRead(props.id));
    navigator(`/:${props.id}`);
  };
  return (
    <div className="w-100 mailitem d-flex flex-row" onClick={setRead}>
      {!isRead && <span className="unread">●</span>}

      <h6 className="ms-3 w-20 mailitememail">{props.messageto}</h6>
      <h6 className="ms-3 mailitemdata">: {props.subject}</h6>
      <p className="ms-3 mailitemdata">{props.message}</p>
    </div>
  );
};

export default MailItem;
