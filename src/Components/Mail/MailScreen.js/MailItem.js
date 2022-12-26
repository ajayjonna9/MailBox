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
  // const sentMailRead = useSelector((state) => state.email.sentMailRead);
  const userID = useSelector((state) => state.auth.userID);
  const mailarr = useSelector((state) => state.email.inboxMailarr);
  // if (isRead[clickedId].id === props.id) {
  //    isread=true
  // }

  const dispatcher = useDispatch();
  const navigator = useNavigate();
  let message = props.message.substring(0, 11);
  message = message + "...";
  // for (let i = 0; i < 20; i++){
  //   message=message+props.message[i]
  // }
  let isRead;

  for (let i of props.MailReadarr) {
    if (i.id === props.id) {
      isRead = i.isRead;
    }
  }
  const onDelete = async () => {
    try {
      if (props.method === "sent") {
        const res = await axios.delete(
          `https://mailbox-d4b6e-default-rtdb.firebaseio.com/${userID}/sent/${props.id}.json`
        );
        console.log("delete", res);

        dispatcher(emailActions.deleteSentMail(props.id));
      } else if (props.method === "inbox") {
        const res = await axios.delete(
          `https://mailbox-d4b6e-default-rtdb.firebaseio.com/${userID}/inbox/${props.id}.json`
        );
        dispatcher(emailActions.deleteInboxMail(props.id));
      }
    } catch {
      alert("wrong");
    }
  };
  const setRead = () => {
    if (props.method === "sent") {
      dispatcher(emailActions.setSentMailRead(props.id));
      navigator(`/sent/:${props.id}`);
    } else if (props.method === "inbox") {
      dispatcher(emailActions.setInboxMailRead(props.id));
      navigator(`/:${props.id}`);
    }
  };
  return (
    <div className="mailitem d-flex flex-row">
      <div className=" flex-grow-1 d-flex flex-row" onClick={setRead}>
        {console.log("gg", props.MailReadarr[props.index], mailarr)}
        <span
          className={props.method === "inbox" && !isRead ? "unread" : "read"}
        >
          ●
        </span>
        {console.log("props", props)}
        <h6 className="ms-3 w-20 mailitememail">
          {props.method === "inbox" ? props.messagefrom : props.messageto}
        </h6>
        <h6 className="ms-3 mailitemdata">: {props.subject}</h6>
        <p className="ms-3 mailitemdata">
          {props.message.length > 10 ? message : props.message}
        </p>
      </div>
      <Button variant="danger" className="deletebutton" onClick={onDelete}>
        delete
      </Button>
    </div>
  );
};

export default MailItem;
