import React from "react";
import "../styles/Destination.css";
import planet from "../assets/destination/image-mars.png";

const Destination = () => {
  return (
    <div className="destination">
      <div className="destinationbox">
        <p className="title">
          <span>01</span> Pick your destination{" "}
        </p>

        <div className="planet">
          <div className="planet-image">
            <img src={planet} alt="" />
          </div>
          <div className="planet-details">
            <div className="planet-tabs">
              <p className="planet-tab">Moon</p>
              <p className="planet-tab">Mars</p>
              <p className="planet-tab">Europa</p>
              <p className="planet-tab">Titan</p>
            </div>
            <p className="planet-name">Moon</p>
            <p className="planet-desc">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <hr />
            <div className="planet-stats">
              <div>
                <p className="avg">AVG.DISTANCE</p>
                <p className="stats">309,222 KM</p>
              </div>

              <div>
                <p className="est">EST.TRAVEL TIME</p>
                <p className="stats">3 DAYS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
