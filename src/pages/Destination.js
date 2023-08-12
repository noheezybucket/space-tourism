import React, { useState } from "react";
import "../styles/Destination.css";
import data from "../data/data.js";

const Destination = () => {
  const [toggle, setToggle] = useState(0);
  const destinations = data.destinations;

  console.log(data);

  return (
    <div className="destination">
      <div className="destinationbox">
        <p className="title">
          <span>01</span> Pick your destination{" "}
        </p>

        <div className="planet">
          <div className="planet-image">
            <img src={destinations[toggle]["images"]["png"]} alt="planet" />
          </div>
          <div className="planet-details">
            <div className="planet-tabs">
              <p
                className={`planet-tab ${toggle === 0 ? "active" : ""}`}
                onClick={() => {
                  setToggle(0);
                }}
              >
                Moon
              </p>
              <p
                className={`planet-tab ${toggle === 1 ? "active" : ""}`}
                onClick={() => {
                  setToggle(1);
                }}
              >
                Mars
              </p>
              <p
                className={`planet-tab ${toggle === 2 ? "active" : ""}`}
                onClick={() => {
                  setToggle(2);
                }}
              >
                Europa
              </p>
              <p
                className={`planet-tab ${toggle === 3 ? "active" : ""}`}
                onClick={() => {
                  setToggle(3);
                }}
              >
                Titan
              </p>
            </div>
            <p className="planet-name">{destinations[toggle]["name"]}</p>
            <p className="planet-desc">{destinations[toggle]["description"]}</p>
            <hr />
            <div className="planet-stats">
              <div>
                <p className="avg">AVG.DISTANCE</p>
                <p className="stats">{destinations[toggle]["distance"]}</p>
              </div>

              <div>
                <p className="est">EST.TRAVEL TIME</p>
                <p className="stats">{destinations[toggle]["travel"]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
