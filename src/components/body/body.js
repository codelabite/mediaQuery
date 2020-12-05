import React from "react";
import Body1 from "./body1/body1";
import BodyCard from "./BodyCard/BodyCard";
import "./Mainbody.css";

function MainBody() {
  return (
    <div className="mainbody">
      <Body1 />
      <BodyCard />
    </div>
  );
}

export default MainBody;
