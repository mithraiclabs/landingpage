import "./IndexTreasury.scss";
import React from "react";
import styled from "styled-components";
import background from "../images/bg.jpg";

const TreasuryPage = () => {
  return (
    <div className="index-treasury" style={{backgroundImage: `url(${background})`}}>
      <div className="it-top-group">
        <div className="it-block">
          <h1>TREASURY MANAGEMENT</h1>
          <div>
            <p>PsyOptions can be a lucrative strategy for treasury management. Partner with us to make liquid option markets on your token.</p>
            <p>We can tailor an appropriate strategy to your needs that focuses on:</p>
          </div>
        </div>
      </div>
      <div className="it-bottom-group">
        <div className="it-block">
          <h1 className="ibrgb-title">
            Greater decentralize your token holders as speculators or other participants exercise option contracts.
          </h1>
        </div>
        <div className="it-block">
          <h1 className="ibrgb-title">
            Generating residual funding through premiums collected and exercises made
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TreasuryPage;
