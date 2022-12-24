import React, { useEffect } from "react";
import Header from "./Header/Header";
import MailOptions from "./MailOptions/MailOptions";
import MailScreen from "./MailScreen.js/MailScreen";
import { useDispatch, useSelector } from "react-redux";

import MailPage from "./MailPage";
import ExpandMail from "./MailScreen.js/ExpandMail";

const MailMainPage = () => {
  const isCompose = useSelector((state) => state.mailactions.isCompose);

  return (
    <div>
      <Header />
      <div className="d-flex flex-row">
        <MailOptions />
        <MailScreen />
      </div>
      {isCompose && <MailPage />}
    </div>
  );
};

export default MailMainPage;
