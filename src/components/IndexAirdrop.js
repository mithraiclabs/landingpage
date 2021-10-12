import React from 'react'
import styled from 'styled-components'
import Joystick from "../images/Joystick.png"
const AirdropPage = () => {
    return (
        <PageContainer>
        
        <PageContainertext>
        
           OPTIONS AIRDROP
          
          <PageContainertextpara>
                Increase foundation funding and reduce sell pressure by airdropping options to your community. PsyOptions physically settled options can help align incentives with community and team members while protecting the foundation from opportunistic “supporters”
          </ PageContainertextpara>
    
          </PageContainertext>
       
        <PageContainerimg>
            <img src ={Joystick} alt="Joystick"/> 
        </PageContainerimg>
     
        </PageContainer>
    )
}

export default AirdropPage

const PageContainer = styled.div `
display:flex;
justify-content: center;
align-items: center;
position:relative;
height:100vh;
flex-direction:row;
width:100%;
@media screen and (max-width:2560px){
    
  height:50vh;
}
@media screen and (max-width:1440px){
    height:120vh;
 }
@media screen and (max-width:1024px){
  width:100%;
  display:flex;
   height:180vh;
 }
@media screen and (max-width:768px){
  width:100%;
      display:block;
    height:130vh;
    text-align:justify;
 }
@media screen and (max-width:425px){
    width:100%;
    display:block;
   }
   @media screen and (max-width:375px){
    width:100%;
    display:block;
   }
   @media screen and (max-width:320px){
    width:100%;
    display:block;
   }
`


const PageContainertextpara = styled.div `



color: #8BEAFF !important;
font-family: 'Manrope', sans-serif !important;
line-height: 22.32px;
font-size:15px;
letter-spacing:1px;
`
const PageContainertext =styled.div `

align-items:center;
font-size: 25px;
line-height: 200%;
color: #E4F5FF;
text-shadow: 0px 0px 20px #0347F7;
padding-top:6rem ;
padding-left:12rem ;
font-family:Goldman,cursive;
letter-spacing:2px;
@media screen and (max-width:2560px){
  padding-top:1rem ;
  padding-left:42rem ;
}
@media screen and (max-width:1440px){
  padding-top:6rem ;
padding-left:12rem ;
}
@media screen and (max-width:768px){
  width:100%;
  font-size: 22px;
  padding:1rem ;
}
@media screen and (max-width:425px){
  width:100%;
  font-size: 18px;
  padding:1rem ;
}
`
const PageContainerimg =styled.div `

display:flex;
padding-right:2.5rem ;
@media screen and (max-width:2560px){
  padding-right:35rem ;
}
@media screen and (max-width:1440px){
  padding-right:2.5rem ;
}
@media screen and (max-width:768px){
  width:100% !important;
  padding:1rem ;

 }
@media screen and (max-width:425px){
  width:100% !important;
  padding:1rem ;

  }
  @media screen and (max-width:375px){
    width:100% !important;
   
   }
   @media screen and (max-width:320px){
    width:100% !important;
 
      }
`


