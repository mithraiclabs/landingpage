import React from "react";
import "../styles/Relationships.scss";
import LogoD1 from "../images/friktion.png";
import LogoD2 from "../images/tap-finance.png";
import LogoD3 from "../images/katana.png";
import LogoI1 from "../images/alameda.png";
import LogoI2 from "../images/solana.jpg";
import LogoI3 from "../images/gbv.jpeg";
import LogoI4 from "../images/cms.jpg";
import LogoI5 from "../images/wintermute.jpg";
import LogoI6 from "../images/mgnr.jpg";
import LogoI7 from "../images/solar-eco-fund.jpg";
import LogoI8 from "../images/ledger-prime.png";
import LogoI9 from "../images/one-block.jpg";
import LogoI10 from "../images/airspeed18.jpg";

const Relationships = () => {
  return (
    <div className="relationships">
      <h1>Dapps Built on PsyOptions</h1>
      <div className="r-grid">
        {/* additional content in follow-up release */}
        <img src={LogoD1} alt="dapp built on PsyOptions" width="200"/>
        <img src={LogoD2} alt="dapp built on PsyOptions"/>
        <img src={LogoD3} alt="dapp built on PsyOptions"/>
      </div>
      <h1>Investors</h1>
      <div className="r-grid">
        {/* additional content in follow-up release */}
        <img src={LogoI1} alt="PsyOptions Investor"/>
        <img src={LogoI2} alt="PsyOptions Investor"/>
        <img src={LogoI3} alt="PsyOptions Investor"/>
        <img src={LogoI4} alt="PsyOptions Investor"/>
        <img src={LogoI5} alt="PsyOptions Investor"/>
        <img src={LogoI6} alt="PsyOptions Investor"/>
        <img src={LogoI7} alt="PsyOptions Investor"/>
        <img src={LogoI8} alt="PsyOptions Investor"/>
        <img src={LogoI9} alt="PsyOptions Investor"/>
        <img src={LogoI1} alt="PsyOptions Investor"/>
      </div>
    </div>
  );
}

export default Relationships;
