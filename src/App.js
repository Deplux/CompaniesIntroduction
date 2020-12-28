import React from "react";
import "./App.css";

const Wave = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#5000ca"
        fillOpacity="1"
        d="M0,192L48,186.7C96,181,192,171,288,154.7C384,139,480,117,576,96C672,75,768,53,864,80C960,107,1056,181,1152,202.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  );
};

export default function WaveTwo() {
  return (
    <div className="entireUI">
      <div className="TopUI">
        <div>
        <h1 className="mainText">
          TEAM
          <br/>
          DEPLUX
        </h1>
        <p className="depluxLink">
          deplux.io
        </p>
        </div>
        <div className="mainLogo">

        </div>
      </div>
      <div className="footercontainert">
        <Wave />
      </div>
      <div className="BottomUI">

      </div>
    </div>
  );
}
