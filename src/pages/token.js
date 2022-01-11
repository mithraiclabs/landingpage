import "../styles/styles.global.scss";
import "../styles/Token.scss";

import React from "react";
import Seo from "../components/seo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Infographic from "../images/psy_token_infographic.png";

const Token = () => {
  return (
    <div className="psyoptions psyoptions-token">
      <Seo title="Psy Token" />
      <Header />
      <main className="p-content">
        <img src={Infographic} alt="PsyOptions Token" />
      </main>
      <Footer />
    </div>
  );
};

export default Token;
