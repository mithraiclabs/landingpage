import * as React from "react"
import { FaBars,FaTimes } from "react-icons/fa"
import companyLogo from "../images/logo.png"
import { useEffect,useState } from "react"
import { IconContext } from "react-icons/lib"
import {
      MobileIcon,
      Nav,
      NavbarContainer,
      NavItem,
      NavLinks,
      NavLogo,
      NavMenu,
NavBtn
      
    } from "./NavbarElements"

    const Header =()=>{
      const [click,setClick]=useState(false)
      const [scroll,setScroll]=useState(false)

      const handleClick = ()=> setClick(!click)
      const closeMobileMenu = () =>setClick(false)

      const changeNav = () =>{
        if (window.scrollY >=80){
          setScroll(true)
        }
        else{
          setScroll(false)
        }
      }
      useEffect(()=>{
        changeNav()
        window.addEventListener("scroll",changeNav)
      },[])
      return(
    <>
        <IconContext.Provider value={{color:"#131313"}}>
        <Nav active={scroll} click={click}  >
        
        <NavbarContainer >
          <NavLogo to="/" onClick={closeMobileMenu}>
          <img src ={companyLogo} alt="logo"/> 
        
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ?<FaTimes/>:<FaBars/>}
          </MobileIcon>
          <NavMenu  onClick={handleClick} click={click}>

       
          <NavItem>
            <NavLinks to="/">Markets</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/">Portfolio</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/">Faucets</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/">Docs</NavLinks>
          </NavItem>
          <NavBtn>
            Launch app
          </NavBtn>
          </NavMenu>
        </NavbarContainer>
        </Nav>
        </IconContext.Provider >
       </>
      )
    }
    export default Header
