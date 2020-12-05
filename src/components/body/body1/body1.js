import React from "react";
import "./body.css";
import img from "../../../img/we.svg";

function Body1() {
  return (
    <div className="bodyArrange">
      <div className="body">
        <div className="bodyContent">
          <div>Get Trained. Get Hired</div>
          <p>
            Utiva offers a wide variety of programs and courses and led by
            leading industry experts.
          </p>
        </div>
        <img src={img} />
      </div>
    </div>
  );
}

export default Body1;
