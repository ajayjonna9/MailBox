import React, { useEffect } from "react";
import Header from "./Header/Header";
import MailOptions from "./MailOptions/MailOptions";
import MailScreen from "./MailScreen.js/MailScreen";
import { useDispatch, useSelector } from "react-redux";

import MailPage from "./ComposeMail/MailPage";
import ExpandMail from "./MailScreen.js/ExpandMail";

const SentMailMainPage = () => {
  const isCompose = useSelector((state) => state.mailactions.isCompose);
  const mailarr = useSelector((state) => state.email.sentMailarr);
  // const inBoxEmail = useSelector((state) => state.email.inboxMailarr[clickedid]);
  //  const sentEmail = useSelector((state) => state.email.sentMailarr[clickedid]);
  const MailRead = useSelector((state) => state.email.sentMailRead);
  return (
    <div>
      <Header />
      <div className="d-flex flex-row">
        <MailOptions />
        <MailScreen mailarr={mailarr} readarr={MailRead} method={"sent"} />
      </div>
      {isCompose && <MailPage />}
    </div>
  );
};

export default SentMailMainPage;
