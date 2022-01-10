import "../styles/IndexAirdrop.scss";
import React from "react";
import Joystick from "../images/Joystick.png";

const IndexAirdrop = () => {
  return (
    <div className="index-airdrop">
      <div className="ia-block">
        <h1>OPTIONS AIRDROP</h1>
        <div>
          Increase foundation funding and reduce sell pressure by airdropping options to your community. PsyOptions physically settled options can help align incentives with community and team members, while protecting the foundation from those who are only opportunistic
        </div>
      </div>
      <img src={Joystick} alt="PsyOptions Airdrops for communities, for example video game streamers"/> 
    </div>
  );
}

export default IndexAirdrop;
