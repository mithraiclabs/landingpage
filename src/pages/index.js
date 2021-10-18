import "./styles.global.scss";

import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import Seo from "../components/seo";
import IndexIntro from "../components/IndexIntro";
import IndexBlockchain from "../components/IndexBlockchain";
import IndexTreasury from "../components/IndexTreasury";
import IndexAirdrop from "../components/IndexAirdrop";
import IndexLaunch from "../components/IndexLaunch";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

const Index = () => {
  const [lastInView, updateLastInView] = useState(0);

  const observerOptions = {
    threshold: 0.2
  };
  const [introRef, introInView, introEntry] = useInView(observerOptions);
  const [blockchainRef, blockchainInView, blockchainEntry] = useInView(observerOptions);
  const [treasuryRef, treasuryInView, treasuryEntry] = useInView(observerOptions);
  const [airdropRef, airdropInView, airdropEntry] = useInView(observerOptions);
  const [launchRef, launchInView, launchEntry] = useInView(observerOptions);

  const list = [
    ['Welcome to PsyOptions', introRef, introEntry],
    ['Solana Blockchain', blockchainRef, blockchainEntry],
    ['Treasury Management', treasuryRef, treasuryEntry],
    ['Options Airdrop', airdropRef, airdropEntry],
    ['Launch App', launchRef, launchEntry]
  ];

  useEffect(() => {
    let inView;
    if (introInView) {
      inView = 0;
    }
    if (blockchainInView) {
      inView = 1;
    }
    if (treasuryInView) {
      inView = 2;
    }
    if (airdropInView) {
      inView = 3;
    }
    if (launchInView) {
      inView = 4;
    }
    if (typeof(inView) === 'number') {
      updateLastInView(inView);
    }
  }, [introInView, blockchainInView, treasuryInView, airdropInView, launchInView]);

  const scrollToElement = function() {
    const scrollOptions = { behavior: 'smooth', block: 'center', inline: 'nearest'};
    (lastInView === list.length - 1) ? list[0][2].target.scrollIntoView(scrollOptions)
                                     : list[lastInView + 1][2].target.scrollIntoView(scrollOptions);
  };

  const handleClick = () => scrollToElement();
  const handleKeyDown = (e) => (e.keyCode === 13) ? scrollToElement() : null;

  return (
    <div className="psyoptions psyoptions-index">
      <Seo title="Home" />
      <Header />
      <main className="p-content">
        <div ref={introRef}>
          <IndexIntro />
        </div>
        <div ref={blockchainRef}>
          <IndexBlockchain />
        </div>
        <div ref={treasuryRef}>
          <IndexTreasury />
        </div>
        <div ref={airdropRef}>
          <IndexAirdrop />
        </div>
        <div ref={launchRef}>
          <IndexLaunch />
        </div>
      </main>
      <Footer />
        <div className="anchor-navigation">
          <div className="p-button" onClick={handleClick} onKeyDown={handleKeyDown} role="button" tabIndex="0">
            {
              (lastInView === list.length - 1) ? (<><FaArrowCircleUp /> {list[0][0]}</>)
                                               : (<><FaArrowCircleDown /> {list[lastInView + 1][0]}</>)
            }
          </div>
        </div>
    </div>
  );
};

export default Index;
