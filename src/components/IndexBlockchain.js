import "../styles/IndexBlockchain.scss";
import React from "react";
import background from "../images/Background.png";
import cube from "../images/Cube.png";

const IndexBlockchain = () => {
  return (
    <div className="index-blockchain" style={{backgroundImage: `url(${background})`}}>
      <div className="ib-left-group">
        <img src ={cube} alt="Solana Blockchain Foundations cube"/>
        <h1>
          SOLANA BLOCKCHAIN FOUNDATIONS
        </h1>
      </div>
      <div className="ib-right-group">
        <div className="ibrg-block">
          <h1>
            The options are limitless.
          </h1>
          <div>
            PsyOptions aims to become one of the foundational DeFi primitives on the Solana blockchain by offering completely trustless American style options for any SPL token.
          </div>
        </div>
        <div className="ibrg-block">
          <div>
            Providing this clearing house infrastructure to the Solana ecosystem will allow for increased composability between protocols, helping teams align incentives between themselves, their investors, their community members, and more.
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexBlockchain;
