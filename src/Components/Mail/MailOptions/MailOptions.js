import React from "react";
import Compose from "./Compose";

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
      </div>
    </div>
  );
};

export default MailOptions;
