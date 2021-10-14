import "./IndexIntro.scss";
import React from "react";
import RetroLogo from "../images/Retro logo2.png";

const IndexIntro = () => {
  return (
    <div className="index-intro">
      <div className="ii-announcement">
        <div className="iia-text">
          <h1 className="super">AMERICAN STYLE OPTIONS, ANYTIME, ANYWHERE</h1>
          <div>Trade completely trustless American style options for any SPL token.</div>
        </div>
        <div className="iia-button-group">
          <a href="https://app.psyoptions.io" className="p-button">Start trading</a>
          <a href="https://docs.psyoptions.io" className="p-button">Read our docs</a>
        </div>
      </div>
      <img className="ii-retro-logo" src={RetroLogo} alt="PsyOptions retro logo with synthwave style"/>
    </div>
  )
}

export default IndexIntro;
