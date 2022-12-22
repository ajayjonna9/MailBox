import React from "react";
import { useSelector } from "react-redux";
import MailItem from "./MailItem";

const MailsStructure = () => {
  const mailarr = useSelector((state) => state.email.emailarr);
  const arr = [
    {
      id: 1,
      message: "hello this is email",
      subject: "test",
      email: "jonna@gmail.com",
    },
    {
      id: 2,
      message: "hello this is email",
      subject: "test",
      email: "jonna@gmail.com",
    },
  ];
  return (
    <div className=" m-3">
      {arr.map((item) => {
        return (
          <MailItem
            key={item.id}
            message={item.message}
            subject={item.subject}
            id={item.id}
            messageto={item.email}
          />
        );
      })}
    </div>
  );
};

export default MailsStructure;
