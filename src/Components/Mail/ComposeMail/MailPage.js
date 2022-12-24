import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import MailPageBody from "./MailPageBody";
import "./MailPage.css";

const MailPage = () => {
  return (
    <div className="mailpage">
      <Card>
        <Card.Body>
          {/* <MailPageHeader /> */}
          <MailPageBody />
          {/* <MailPageFooter/> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MailPage;
