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
        <li><Link to="https://app.psyoptions.io">Launch App</Link></li>
        <li><Link to="https://docs.google.com/forms/d/e/1FAIpQLSdJTqU3eg5dvxNm2KFcQM_zWibdoMKVW3Szjy3V0XOKk4P9jA/viewform">Contact Form</Link></li>
        <li><Link to="https://docs.psyoptions.io">Docs</Link></li>
        <li><Link to="https://medium.com/psyoptions">Careers</Link></li>
      </ul>
      <ul className="f-social-links">
        <li><Link to="https://twitter.com/PsyOptions"><img src ={Twitter} alt="Twitter"/></Link></li>
        <li><Link to="https://github.com/mithraiclabs"><img src ={Github} alt="Github"/></Link></li>
        <li><Link to="https://t.me/psyoptions"><img src ={Telegram} alt="Telegram"/></Link></li>
        <li><Link to="https://discord.gg/MgDdJKgZJc"><img src ={Discord} alt="Discord"/></Link></li>
        <li><Link to="https://medium.com/psyoptions"><img src ={Medium} alt="Medium"/></Link></li>
      </ul>
      <div className="f-made-by">made by mithraiclabs</div>
    </div>
  )
}

export default Footer;
