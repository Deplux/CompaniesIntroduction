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
const Triangle = ({ style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={style}
    >
      <path
        fill="#5000ca"
        fill-opacity="1"
        d="M0,96L1440,320L1440,320L0,320Z"
      ></path>
    </svg>
  );
};

const Blob = () => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{zIndex:"auto"}}>
      <path
        fill="#5000ca"
        d="M37.5,-59.1C50.7,-57.4,64.8,-51.5,72.7,-40.9C80.6,-30.4,82.3,-15.2,79.7,-1.5C77.2,12.3,70.5,24.6,61.9,33.9C53.3,43.2,42.8,49.5,32.1,58.4C21.5,67.2,10.7,78.6,-2.6,83.1C-15.9,87.6,-31.9,85.2,-46.3,78.5C-60.7,71.9,-73.6,60.9,-80.5,47.1C-87.3,33.3,-88,16.7,-87.2,0.5C-86.4,-15.7,-84,-31.5,-74.6,-40.7C-65.1,-49.9,-48.5,-52.6,-34.9,-54.1C-21.3,-55.6,-10.7,-55.8,0.8,-57.1C12.2,-58.4,24.4,-60.9,37.5,-59.1Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};
export default function WaveTwo() {
  return (
    <div className="entireUI">
      <div className="TopUI">
        <div>
          <h1 className="mainText">
            PLUX
            <br />
            CON
          </h1>
          <p className="depluxLink">pluxcon.net</p>
        </div>
        <div className="mainLogo"></div>
      </div>
      <div>
        <Wave />
      </div>
      <div className="middleUI">
        <div>
          <h1 className="secondText">
            MINE
            <br />
            PLUX
          </h1>
          <p className="minepluxLink">mineplux.io</p>
        </div>
        <div className="mainLogo2"></div>
      </div>
      <Triangle style={{ marginBottom: -3,zIndex:-1 }} />
      <div className="TopUI">
        <div>
          <h1 className="mainText">
            AD
            <br />
            301
          </h1>
          <p className="depluxLink">ad301.com</p>
        </div>
        <div className="mainLogo"></div>
      </div>
      <div style={{ height: "8vh", backgroundColor: "#5000ca" }}></div>
    </div>
  );
}
