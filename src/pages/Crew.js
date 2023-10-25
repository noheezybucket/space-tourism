import React, { useState } from "react";
import "../styles/Crew.css";
import data from "../data/data.js";

const Crew = () => {
  const [toggle, setToggle] = useState(0);
  const crew = data.crew;

  setTimeout(() => {
    console.log("toggle" + toggle);
    if (toggle === 3) {
      setToggle(0);
    } else {
      setToggle(toggle + 1);
    }
  }, 3000);

  return (
    <div className="crew">
      <div className="crewbox">
        <p className="title">
          <span>02</span> Meet your crew{" "}
        </p>
        <div className="crew-caroussel">
          <div className="crew-member-infos">
            <h2 className="crew-member-role">{crew[toggle]["role"]}</h2>
            <h3 className="crew-member-name">{crew[toggle]["name"]}</h3>
            <p className="crew-member-bio">{crew[toggle]["bio"]}</p>
            <div className="crew-tabs">
              <div
                className={`crew-tab ${toggle === 0 ? "crew-tab-active" : ""}`}
                onClick={() => {
                  setToggle(3);
                }}
              ></div>
              <div
                className={`crew-tab ${toggle === 1 ? "crew-tab-active" : ""}`}
                onClick={() => {
                  setToggle(3);
                }}
              ></div>
              <div
                className={`crew-tab ${toggle === 2 ? "crew-tab-active" : ""}`}
                onClick={() => {
                  setToggle(3);
                }}
              ></div>
              <div
                className={`crew-tab ${toggle === 3 ? "crew-tab-active" : ""}`}
                onClick={() => {
                  setToggle(3);
                }}
              ></div>
            </div>
          </div>
          <div className="crew-member-photo">
            <img src={crew[toggle]["images"]["png"]} alt="planet" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
