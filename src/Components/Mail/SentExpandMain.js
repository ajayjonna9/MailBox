import React from "react";
import MailOptions from "./MailOptions/MailOptions";
import Header from "./Header/Header";
import MailPage from "./ComposeMail/MailPage";
import ExpandMail from "./MailScreen.js/ExpandMail";
import { useSelector } from "react-redux";
import MailScreenHeader from "./MailScreen.js/MailScreenHeader/MailScreenHeader";

const SentExpandMain = () => {
  const clickedid = localStorage.getItem("clickedid");
  const isCompose = useSelector((state) => state.mailactions.isCompose);
  const inBoxEmail = useSelector((state) => state.email.sentMailarr);
  const Email = useSelector((state) => state.email.sentMailarr[clickedid]);

  return (
    <div>
      <Header />
      {console.log("propsemail...", Email, clickedid, inBoxEmail)}
      <div className="d-flex flex-row">
        <MailOptions />
        <div className="w-100">
          <div className="d-flux flux-column">
            <MailScreenHeader />
            <ExpandMail email={Email} />
          </div>
        </div>
      </div>
      {isCompose && <MailPage />}
    </div>
  );
};

export default SentExpandMain;
