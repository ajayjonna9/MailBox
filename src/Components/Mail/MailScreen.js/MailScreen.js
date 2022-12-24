import React from "react";
import { useSelector } from "react-redux";
import ExpandMail from "./ExpandMail";
import MailItem from "./MailItem";
import MailScreenHeader from "./MailScreenHeader/MailScreenHeader";
import MailsStructure from "./MailsStructure";

const MailScreen = (props) => {
  // const clickedid = useSelector((state) => state.email.clickedId);
  // const mailarr = useSelector((state) => state.email.sentMailarr);
  // // const inBoxEmail = useSelector((state) => state.email.inboxMailarr[clickedid]);
  // //  const sentEmail = useSelector((state) => state.email.sentMailarr[clickedid]);
  // const sentMailRead = useSelector((state) => state.email.sentMailRead);
  const mailarr = useSelector((state) => state.email.inboxMailarr);

  return (
    <div className="w-100">
      <div className="d-flux flux-column">
        <MailScreenHeader />
        <div className=" m-3">
          {console.log("inboxitem", props.mailarr, mailarr)}
          {props.mailarr.length > 0 ? (
            props.mailarr.map((item, ind) => {
              return (
                <MailItem
                  key={item.id}
                  index={ind}
                  message={item.message}
                  subject={item.subject}
                  id={item.id}
                  messageto={item.emailTo}
                  MailReadarr={props.readarr}
                  method={props.method}
                />
              );
            })
          ) : (
            <h3 className="ms-5">Loading....</h3>
          )}
          {}
        </div>
      </div>
    </div>
  );
};

export default MailScreen;
