import React from "react";
import { useSelector } from "react-redux";
import ExpandMail from "./ExpandMail";
import MailItem from "./MailItem";
import MailScreenHeader from "./MailScreenHeader/MailScreenHeader";
import MailsStructure from "./MailsStructure";

const MailScreen = () => {
  const clickedid = useSelector((state) => state.email.clickedId);

  return (
    <div className="w-100">
      <div className="d-flux flux-column">
        <MailScreenHeader />
        <MailsStructure />
      </div>
    </div>
  );
};

export default MailScreen;
