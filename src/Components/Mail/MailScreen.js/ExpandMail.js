import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import "./MailScreen.css";
const ExpandMail = () => {
  const clickedid = useSelector((state) => state.email.clickedId);
  const email = useSelector((state) => state.email.emailarr[clickedid - 1]);

  return (
    <div>
      <Card>
        <Card.Body>
          <h3 className="expandsubject text-center my-4"> {email.subject}</h3>
          <hr />
          <div>
            <i class="bi bi-person-circle"> </i>{" "}
            <h6 className="expandmail ">{email.email}</h6>
            <p className="expandto">To:</p>
          </div>
          <hr />
          <p className="expandmessage my-4">{email.message}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ExpandMail;
