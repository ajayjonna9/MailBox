import React from "react";
import { useSelector } from "react-redux";
import MailItem from "./MailItem";

const MailsStructure = () => {
  const mailarr = useSelector((state) => state.email.emailarr);
  // const arr = [
  //   {
  //     id: 1,
  //     message: "hello this is email",
  //     subject: "test",
  //     email: "jonna@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     message: "hello this is email",
  //     subject: "test",
  //     email: "jonna@gmail.com",
  //   },
  // ];
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
          />
        );
      })}
    </div>
  );
};

export default MailsStructure;
