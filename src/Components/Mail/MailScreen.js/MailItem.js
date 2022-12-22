import React from "react";
import "./MailScreen.css";

const MailItem = (props) => {
  return (
    <div className="w-100 mailitem d-flex flex-row">
      <h6 className="ms-3 w-20 mailitememail">{props.messageto}</h6>
      <h6 className="ms-3 mailitemdata">: {props.subject}</h6>
      <p className="ms-3 mailitemdata">{props.message}</p>
    </div>
  );
};

export default MailItem;
