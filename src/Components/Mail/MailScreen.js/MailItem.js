import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emailActions } from "../../Store/Reducers/EmailReducer";
import { mailActions } from "../../Store/Reducers/MailactionsReducer";
import "./MailScreen.css";

const MailItem = (props) => {
  let isread = false;
  const clickedId = useSelector((state) => state.email.clickedId);
  const isRead = useSelector((state) => state.email.isread);
  const userID = useSelector((state) => state.auth.userID);
  // if (isRead[clickedId].id === props.id) {
  //    isread=true
  // }

  const dispatcher = useDispatch();
  const navigator = useNavigate();
  const onDelete = async () => {
    try {
      const res = await axios.delete(
        `https://mailbox-d4b6e-default-rtdb.firebaseio.com/${userID}/sent/${props.id}.json`
      );
      console.log("delete", res);
      dispatcher(emailActions.deleteMail(props.id));
    } catch {
      alert("wrong");
    }
  };
  const setRead = () => {
    dispatcher(emailActions.setRead(props.id));
    navigator(`/:${props.id}`);
  };
  return (
    <div className="mailitem d-flex flex-row">
      <div className=" flex-grow-1 d-flex flex-row" onClick={setRead}>
        {console.log("gg", isRead[props.index])}
        <span className={!isRead[props.index] ? "unread" : "read"}>●</span>

        <h6 className="ms-3 w-20 mailitememail">{props.messageto}</h6>
        <h6 className="ms-3 mailitemdata">: {props.subject}</h6>
        <p className="ms-3 mailitemdata">{props.message}</p>
      </div>
      <Button variant="danger" className="deletebutton" onClick={onDelete}>
        delete
      </Button>
    </div>
  );
};

export default MailItem;
