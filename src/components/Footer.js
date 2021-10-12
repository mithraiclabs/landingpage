import "./Footer.scss";
import React from "react";
import { Link } from "gatsby";
import Telegram from "../images/Telegram.png";
import Twitter from "../images/Twitter.png";
import Github from "../images/Github.png";
import Medium from "../images/Medium.png";
import Discord from "../images/Discord.png";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="f-site-links">
        <li><Link to="/404">contact form</Link></li>
        <li><Link to="/404">docs</Link></li>
        <li><Link to="/404">careers</Link></li>
      </ul>
      <ul className="f-social-links">
        <li><Link to="/404"><img src ={Twitter} alt="Twitter"/></Link></li>
        <li><Link to="/404"><img src ={Github} alt="Github"/></Link></li>
        <li><Link to="/404"><img src ={Telegram} alt="Telegram"/></Link></li>
        <li><Link to="/404"><img src ={Discord} alt="Discord"/></Link></li>
        <li><Link to="/404"><img src ={Medium} alt="Medium"/></Link></li>
      </ul>
      <div className="f-made-by">made by mithraiclabs</div>
    </div>
  )
}

export default Footer;
