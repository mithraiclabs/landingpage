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

const safeDocument = typeof document !== 'undefined' ? document : {};

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // const [scroll,setScroll] = useState(false);

  const handleClick = () => setShowMobileMenu(!showMobileMenu);
  const handleKeyDown = (e) => (e.keyCode === 13) ? setShowMobileMenu(!showMobileMenu) : null;

  // const closeMobileMenu = () => setClick(false);

  // const changeNav = () => {
  //   if (window.scrollY >= 80){
  //     setScroll(true);
  //   } else{
  //     setScroll(false);
  //   }
  // };

  useEffect(() => {
    // const html = safeDocument.documentElement;
    const { body } = safeDocument;
    if (showMobileMenu) {
      body.style.overflow = 'hidden';
      body.style.position = 'relative';
    } else {
      body.style.overflow = 'auto';
    }
  },[showMobileMenu]);

  return(
    <div className="header">
      <IconContext.Provider value={{ color: "#131313"}}>
        <nav className={`header-nav ${(showMobileMenu)? 'show-nav' : 'hide-nav'}`}>
          <div className="header-logo">
            <Link to="/404"><img src={companyLogo} alt="PsyOptions Logo Icon" /></Link>
          </div>
          <ul>
            <li><Link to="/404">Markets</Link></li>
            <li><Link to="/404">Portfolio</Link></li>
            <li><Link to="/404">Faucets</Link></li>
            <li><Link to="/404">Docs</Link></li>
          </ul>
          <div className="header-mobile-icon"
               onClick={handleClick}
               onKeyDown={handleKeyDown}
               tabIndex="0"
               role="button">
            {showMobileMenu ?<FaTimes/>:<FaBars/>}
          </div>
          <div className="header-nav-button">
            <Link to="/404">Launch App</Link>
          </div>
        </nav>
      </IconContext.Provider >
    </div>
  )
};

export default Header
