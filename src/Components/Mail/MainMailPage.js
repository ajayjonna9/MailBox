import React, { useEffect } from "react";
import Header from "./Header/Header";
import MailOptions from "./MailOptions/MailOptions";
import MailScreen from "./MailScreen.js/MailScreen";
import { useDispatch, useSelector } from "react-redux";

import MailPage from "./ComposeMail/MailPage";
import ExpandMail from "./MailScreen.js/ExpandMail";

const MainMailPage = () => {
  const isCompose = useSelector((state) => state.mailactions.isCompose);
  const mailarr = useSelector((state) => state.email.inboxMailarr);

  const MailRead = useSelector((state) => state.email.inBoxMailRead);
  return (
    <div>
      <Header />
      {console.log("arrr,", mailarr)}
      <div className="d-flex flex-row">
        <MailOptions />
        <MailScreen mailarr={mailarr} readarr={MailRead} method={"inbox"} />
      </div>
      {isCompose && <MailPage />}
    </div>
  );
};

export default MainMailPage;
