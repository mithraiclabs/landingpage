import "./styles.global.scss";

import * as React from "react";
import Seo from "../components/seo";
import IndexIntro from "../components/IndexIntro";
import IndexBlockchain from "../components/IndexBlockchain";
import IndexTreasury from "../components/IndexTreasury";
import IndexAirdrop from "../components/IndexAirdrop";
import IndexLaunch from "../components/IndexLaunch";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Index = () => (
  <div className="psyoptions psyoptions-index">
    <Seo title="Home" />
    <Header />
    <main className="p-content">
      <IndexIntro />
      <IndexBlockchain />
      <IndexTreasury />
      <IndexAirdrop />
      <IndexLaunch />
    </main>
    <Footer />
  </div>
);

export default Index;
