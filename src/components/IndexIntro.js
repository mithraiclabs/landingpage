import "../styles/IndexIntro.scss"
import React from "react"
import RetroLogo from "../images/Retro logo2.png"
import SolanaLogo from "../images/solana-logo-icon.svg"
import SerumLogo from "../images/serum-logo-icon.svg"
import useTvl from "../hooks/useTvl"
import { formatLargeCurrency } from "../utils"

const IndexIntro = () => {
  const tvl = useTvl()

  return (
    <div className="index-intro">
      <div className="ii-announcement">
        <div className="iia-text">
          <h1>COMPLETELY TRUSTLESS AMERICAN STYLE OPTIONS</h1>
          <h2>European style options soon to follow</h2>
        </div>
        <div className="iia-button-group">
          <a href="https://trade.psyoptions.io" className="p-button">
            Start trading
          </a>
          <a href="https://docs.psyoptions.io" className="p-button">
            Read our docs
          </a>
        </div>
        <div className="iia-first">
          A first for blockchain. Winner of the{" "}
          <a href="https://solana.com/news/winners-of-the-solana-x-serum-defi-hackathon">
            Solana X Serum DeFi Hackathon
          </a>
        </div>
        <figure className="iia-built-with">
          <span>Built with Solana</span>&nbsp;
          <a href="https://solana.com/">
            <img src={SolanaLogo} alt="built on Solana" />
          </a>
          <span>and Serum</span>
          <a href="https://projectserum.com/">
            <img src={SerumLogo} alt="built on Serum" />
          </a>
        </figure>
      </div>
      {tvl && <div><h1>TVL: ${formatLargeCurrency(tvl)}</h1></div>}
      <img
        className="ii-retro-logo"
        src={RetroLogo}
        alt="PsyOptions retro logo with synthwave style"
      />
    </div>
  )
}

export default IndexIntro
