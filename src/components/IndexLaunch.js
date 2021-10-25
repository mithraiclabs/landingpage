import "./IndexLaunch.scss";
import React from "react";
import background from "../images/Gradient.png";

const IndexLaunch = () => {
  return (
    <div className="index-launch-app">
      <div className="ila-content">
        <h1>HOW PSYOPTIONS CAN HELP YOU</h1>
        <div>Hedge against volatile crypto currencies with options.</div>
        <a href="https://trade.psyoptions.io" className="p-button">Launch our app</a>
      </div>
      <div className="ila-background" style={{backgroundImage: `url(${background})`}} />
    </div>
  );
}

export default IndexLaunch;
