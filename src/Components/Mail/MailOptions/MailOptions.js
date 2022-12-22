import React from "react";
import Compose from "./Compose";
import DeletedItems from "./DeletedItems";
import InBox from "./InBox";
import SentBox from "./SentBox";
import "./MailOptions.css";

const MailOptions = () => {
  return (
    <div className=" mailoptionscontainer text-center">
      <div className="d-flex flex-column">
        <Compose />
        <InBox />
        <SentBox />
        <DeletedItems />
      </div>
    </div>
  );
};

export default MailOptions;
