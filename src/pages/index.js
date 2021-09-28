import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/Home"
import BlockChainPage from "../components/BlockChainPage"
import TreasuryPage from "../components/TreasuryPage"
import AirdropPage from "../components/AirdropPage"
import LaunchPage from "../components/LaunchPage"
import Footer from "../components/Footer"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Home />
    <BlockChainPage />
    <TreasuryPage />
    <AirdropPage />
    <LaunchPage />
    <Footer />
 </Layout>
)

export default IndexPage
