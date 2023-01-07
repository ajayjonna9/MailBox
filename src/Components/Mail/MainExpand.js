import React from "react";
import MailOptions from "./MailOptions/MailOptions";
import Header from "./Header/Header";
import MailPage from "./ComposeMail/MailPage";
import ExpandMail from "./MailScreen.js/ExpandMail";
import { useSelector } from "react-redux";
import MailScreenHeader from "./MailScreen.js/MailScreenHeader/MailScreenHeader";
import { useParams } from "react-router-dom";

const MainExpand = () => {
  // const clickedid = localStorage.getItem("clickedid");
  // const isCompose = useSelector((state) => state.mailactions.isCompose);
  // const inBoxEmail = useSelector((state) => state.email.inboxMailarr);
  // const Email = useSelector((state) => state.email.inboxMailarr[clickedid]);
  const clickedid = localStorage.getItem("clickedid");
  const { id } = useParams();
  const isCompose = useSelector((state) => state.mailactions.isCompose);
  // const inBoxEmail = useSelector((state) => state.email.sentMailarr);
  const inBoxEmail = useSelector((state) => state.email.inboxMailarr);
  let Email;
  for (let i of inBoxEmail) {
    console.log("i val..", i.id.length, id.length);
    if (i.id === id) {
      Email = i;
      console.log("i val", i);
    }
  }

  return (
    <div>
      <Header />
      {console.log("propsemail...", Email, clickedid, inBoxEmail)}

      <div className="d-flex flex-row">
        <MailOptions />
        <div className="w-100">
          <div className="d-flux flux-column">
            <MailScreenHeader />
            <ExpandMail email={Email} method={"inbox"} />
          </div>
        </div>
      </div>
      {isCompose && <MailPage />}
    </div>
  );
};

export default MainExpand;
