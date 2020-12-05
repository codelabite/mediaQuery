import React from "react";
import "./BodyCard.css";
import img from "../../../img/we.svg";
import data from "./BodyCard.json";

function Body1() {
  return (
    <div className="bodyArrange1">
      <div className="body1">
        {data.map(({ img, desc, name }) => (
          <div className="cardMargin">
            <div className="bodyContent1">
              {" "}
              <img src={img} />
              <div>{name}</div>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body1;
