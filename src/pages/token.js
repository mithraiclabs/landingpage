import "../styles/styles.global.scss"

import React from "react"
import Seo from "../components/seo"
import Footer from "../components/Footer"
import Header from "../components/Header"
import TokenInfo from "./TokenInfo"

const Token = () => {
  return (
    <div className="psyoptions psyoptions-token">
      <Seo title="Psy Token" />
      <Header />
      <main className="p-content">
        <TokenInfo />
      </main>
      <Footer />
    </div>
  )
}

export default Token
