import React from 'react'
import styled from 'styled-components'
import Telegram from "../images/Telegram.png"
import Twitter from "../images/Twitter.png"
import Github from "../images/Github.png"
import Medium from "../images/Medium.png"
import Discord from "../images/Discord.png"
const Footer = () => {
    return (
        <Footers>
            <Footer1>made by mithraiclabs  |  contact form  |  docs  |  careers</Footer1>
            <Footer2>
            <span><img src ={Twitter} alt="Twitter"/> </span>
            <span><img src ={Github} alt="Github"/> </span>
            <span><img src ={Telegram} alt="Telegram"/> </span>
            <span><img src ={Discord} alt="Discord"/> </span>
            <span><img src ={Medium} alt="Medium"/> </span>
            </Footer2>
        </Footers>
    )
}

export default Footer
const Footers= styled.div`
position : relative;
text-align: center;
background-color:transparent;
align-items:center;
justify-content:center;

`

const Footer1=styled.div`
margin-top:10rem;
text-align: center;
background-color:transparent;
align-items:center;
justify-content:center;
color: #8BEAFF !important;
font-family: 'Manrope', sans-serif;
letter-spacing:1px;
font-size:15px;
`
const Footer2=styled.div`

margin-top:1rem;
text-align: center;
align-items:center;
justify-content:center;
letter-spacing:1rem;
`