import React from "react";
import "../styles/IndexRelationships.scss";
import LogoI1 from "../images/alameda.png";
import LogoI2 from "../images/solana.jpg";
import LogoI3 from "../images/gbv.jpg";
import LogoI4 from "../images/cms.jpg";
import LogoI5 from "../images/wintermute.jpg";
import LogoI6 from "../images/mgnr.jpg";
import LogoI7 from "../images/solar-eco-fund.jpg";
import LogoI8 from "../images/ledger-prime.png";
import LogoI9 from "../images/one-block.jpg";
import LogoI10 from "../images/airspeed18.png";
import ProtoFundLogo from "../images/protofund_logo.png";

const Relationships = () => {
  return (
    <div className="relationships">
    <h1>Investors</h1>
      <div className="r-grid">
        {/* additional content in follow-up release */}
        <div>
          <img src={LogoI1} alt="Alameda Research, PsyOptions Investor"/>
          <div>Alameda Research</div>
        </div>
        <div>
          <img src={LogoI2} alt="Solana Cap, PsyOptions Investor"/>
          <div>Solana Cap</div>
        </div>
        <div>
          <img src={LogoI3} alt="GBV, PsyOptions Investor"/>
          <div>GBV</div>
        </div>
        <div>
          <img src={LogoI4} alt="CMS, PsyOptions Investor"/>
          <div>CMS</div>
        </div>
        <div>
          <img src={LogoI5} alt="Wintermute, PsyOptions Investor"/>
          <div>Wintermute</div>
        </div>
        <div>
          <img src={LogoI6} alt="MGNR, PsyOptions Investor"/>
          <div>MGNR</div>
        </div>
        <div>
          <img src={ProtoFundLogo} alt="Protofund, PsyOptions Investor"/>
          <div>Protofund</div>
        </div>
        <div>
          <img src={LogoI7} alt="Solar Eco Fund, PsyOptions Investor"/>
          <div>Solar Eco Fund</div>
        </div>
        <div>
          <img src={LogoI8} alt="Ledger Prime, PsyOptions Investor"/>
          <div>Ledger Prime</div>
        </div>
        <div>
          <img src={LogoI9} alt="One Block, PsyOptions Investor"/>
          <div>One Block</div>
        </div>
        <div>
          <img src={LogoI10} alt="airspeed18, PsyOptions Investor"/>
          <div>airspeed18</div>
        </div>
      </div>
    </div>
  );
}

export default Relationships;
