import "../styles/Header.scss"
import { Link } from "gatsby"
import * as React from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import companyLogo from "../images/logo.png"
import { useEffect, useState } from "react"
import { IconContext } from "react-icons/lib"

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const handleClick = () => setShowMobileMenu(!showMobileMenu)
  const handleKeyDown = e =>
    e.keyCode === 13 ? setShowMobileMenu(!showMobileMenu) : null

  useEffect(() => {
    const safeDocument = typeof document !== "undefined" ? document : {}
    const { body } = safeDocument
    body.style.overflow = showMobileMenu ? "hidden" : "auto"
  }, [showMobileMenu])

  useEffect(() => {
    const checkWindowSize = function () {
      let timeoutId
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if (showMobileMenu && window.matchMedia("(min-width: 900px)").matches) {
          setShowMobileMenu(false)
        }
      }, 400)
    }
    window.addEventListener("resize", checkWindowSize)
    return () => {
      window.removeEventListener("resize", checkWindowSize)
    }
  }, [showMobileMenu])

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <nav className={`header ${showMobileMenu ? "show-nav" : "hide-nav"}`}>
        <div className="header-logo">
          <Link to="/">
            <img src={companyLogo} alt="PsyOptions Logo Icon" />
          </Link>
        </div>
        <ul>
          <li>
            <a href="https://trade.psyoptions.io/#/markets">Markets</a>
          </li>
          <li>
            <a href="https://trade.psyoptions.io/#/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="https://psyfi.io">Vaults</a>
          </li>
          <li>
            <a href="https://docs.psyoptions.io">Docs</a>
          </li>
          <li>
            <a href="https://forum.psyoptions.io">Forum</a>
          </li>
          <li>
            <Link to="/token">Psy Token</Link>
          </li>
        </ul>
        <div
          className="header-mobile-icon"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
          role="button"
        >
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </div>
        <a
          href="https://trade.psyoptions.io"
          className="header-nav-button p-button"
        >
          Launch App
        </a>
      </nav>
    </IconContext.Provider>
  )
}

export default Header
