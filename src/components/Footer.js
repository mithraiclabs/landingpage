import "./Footer.scss";
import React from "react";
import Telegram from "../images/Telegram.png";
import Twitter from "../images/Twitter.png";
import Github from "../images/Github.png";
import Medium from "../images/Medium.png";
import Discord from "../images/Discord.png";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="f-site-links">
        <li><a href="https://app.psyoptions.io">Launch App</a></li>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdJTqU3eg5dvxNm2KFcQM_zWibdoMKVW3Szjy3V0XOKk4P9jA/viewform">Contact Form</a></li>
        <li><a href="https://docs.psyoptions.io">Docs</a></li>
        <li><a href="https://medium.com/psyoptions">Careers</a></li>
      </ul>
      <ul className="f-social-links">
        <li><a href="https://twitter.com/PsyOptions"><img src ={Twitter} alt="Twitter"/></a></li>
        <li><a href="https://github.com/mithraiclabs"><img src ={Github} alt="Github"/></a></li>
        <li><a href="https://t.me/psyoptions"><img src ={Telegram} alt="Telegram"/></a></li>
        <li><a href="https://discord.gg/MgDdJKgZJc"><img src ={Discord} alt="Discord"/></a></li>
        <li><a href="https://medium.com/psyoptions"><img src ={Medium} alt="Medium"/></a></li>
      </ul>
      <div className="f-made-by">made by mithraiclabs</div>
    </div>
  )
}

export default Footer;
