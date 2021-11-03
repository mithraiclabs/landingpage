import "../styles/IndexTreasury.scss";
import React from "react";
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
          Greater decentralize your token holders as speculators or other participants exercise option contracts.
        </div>
        <div className="it-block">
          Generating residual funding through premiums collected and exercises made
        </div>
      </div>
    </div>
  );
}

export default TreasuryPage;
