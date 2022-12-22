import React from "react";
import MailOptions from "../MailOptions/MailOptions";
import Header from "../Header/Header";
import MailPage from "../MailPage";
import ExpandMail from "./ExpandMail";
import { useSelector } from "react-redux";
import MailScreenHeader from "./MailScreenHeader/MailScreenHeader";

const ExpandMain = () => {
  const isCompose = useSelector((state) => state.mailactions.isCompose);

  return (
    <div>
      <Header />
      <div className="d-flex flex-row">
        <MailOptions />
        <div className="w-100">
          <div className="d-flux flux-column">
            <MailScreenHeader />
            <ExpandMail />
          </div>
        </div>
      </div>
      {isCompose && <MailPage />}
    </div>
  );
};

export default ExpandMain;
