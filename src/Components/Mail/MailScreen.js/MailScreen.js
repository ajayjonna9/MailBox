import React from "react";
import MailItem from "./MailItem";
import MailScreenHeader from "./MailScreenHeader/MailScreenHeader";
import MailsStructure from "./MailsStructure";

const MailScreen = () => {
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
