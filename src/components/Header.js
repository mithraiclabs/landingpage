import "./Header.scss";
import { Link } from "gatsby";
import * as React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import companyLogo from "../images/logo.png";
import {
  useEffect,
  useState
} from "react";
import { IconContext } from "react-icons/lib";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClick = () => setShowMobileMenu(!showMobileMenu);
  const handleKeyDown = (e) => (e.keyCode === 13) ? setShowMobileMenu(!showMobileMenu) : null;

  useEffect(() => {
    const safeDocument = typeof document !== 'undefined' ? document : {};
    // const html = safeDocument.documentElement;
    const { body } = safeDocument;
    if (showMobileMenu) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  },[showMobileMenu]);

  return(
    <IconContext.Provider value={{ color: "#fff"}}>
      <nav className={`header ${(showMobileMenu)? 'show-nav' : 'hide-nav'}`}>
        <div className="header-logo">
          <Link to="/404"><img src={companyLogo} alt="PsyOptions Logo Icon" /></Link>
        </div>
        <ul>
          <li><Link to="https://app.psyoptions.io/markets">Markets</Link></li>
          <li><Link to="https://app.psyoptions.io/portfolio">Portfolio</Link></li>
          <li><Link to="/404">Faucets</Link></li>
          <li><Link to="https://docs.psyoptions.io">Docs</Link></li>
        </ul>
        <div className="header-mobile-icon" onClick={handleClick} onKeyDown={handleKeyDown} tabIndex="0" role="button">
          {showMobileMenu ?<FaTimes/>:<FaBars/>}
        </div>
        <Link to="https://app.psyoptions.io" className="header-nav-button p-button">Launch App</Link>
      </nav>
    </IconContext.Provider >
  )
};

export default Header;
