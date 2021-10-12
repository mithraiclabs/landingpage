import "./styles.global.scss";
import * as React from "react";
import Seo from "../components/seo";
import Footer from "../components/Footer";
import Header from "../components/Header";

const NotFoundPage = () => (
  <div className="psyoptions psyoptions-404">
    <Seo title="404: Not found" />
    <Header />
    <main className="p-content">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist yet.  ...the sadness 😪</p>
    </main>
    <Footer />
  </div>
)

export default NotFoundPage;
