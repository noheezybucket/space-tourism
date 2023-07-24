import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homebox">
        <div className="homebox--one">
          <p className="so">SO, YOU WANT TO TRAVEL TO</p>
          <p className="space">SPACE</p>
          <p className="homebox--text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="homebox--two">
          <button className="explore">EXPLORE</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
