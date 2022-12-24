import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import "./MailScreen.css";
const ExpandMail = (props) => {
  // const clickedid = localStorage.getItem("clickedid");
  //  const sentEmail = useSelector((state) => state.email.sentMailarr[clickedid]);
  // const inBoxEmail = useSelector((state) => state.email.inboxMailarr[clickedid]);
  // console.log("clickid.", clickedid);
  return (
    <div>
      <Card>
        <Card.Body>
          {props.email && (
            <>
              <h3 className="expandsubject text-center my-4">
                {" "}
                {props.email.subject}
              </h3>

              <hr />
              <div>
                <i class="bi bi-person-circle"> </i>{" "}
                <h6 className="expandmail ">{props.email.emailTo}</h6>
                <p className="expandto">To:</p>
              </div>
              <hr />
              <p className="expandmessage my-4">{props.email.message}</p>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ExpandMail;
