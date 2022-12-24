import React from "react";
import { useSelector } from "react-redux";
import MailItem from "./MailItem";

const MailsStructure = () => {
  const mailarr = useSelector((state) => state.email.sentMailarr);
  // const inBoxEmail = useSelector((state) => state.email.inboxMailarr[clickedid]);
  //  const sentEmail = useSelector((state) => state.email.sentMailarr[clickedid]);
  const sentMailRead = useSelector((state) => state.email.sentMailRead);
  return (
    <div className=" m-3">
      {console.log("emailarr", mailarr)}
      {mailarr.map((item, ind) => {
        return (
          <MailItem
            key={item.id}
            index={ind}
            message={item.message}
            subject={item.subject}
            id={item.id}
            messageto={item.emailTo}
            sentMailRead={sentMailRead}
          />
        );
      })}
    </div>
  );
};

export default MailsStructure;
