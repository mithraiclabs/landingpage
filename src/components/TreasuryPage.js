import React from 'react'
import styled from "styled-components"
import background from "../images/bg.jpg"
const TreasuryPage = () => {
    return (
        <Backimg>
            <img src ={background} alt="background"/>
        <Toptext1>
        <Toptext1head>TREASURY MANAGEMENT
        <Toptext1para>PsyOptions can be a lucrative strategy for treasury management. Partner with us to make liquid option markets on your token. We can tailor an appropriate strategy to your needs that focuses on:</Toptext1para>
        </Toptext1head>
        
       </Toptext1>
    <Secondtext>
        <Lefttext>Greater decentralize your token holders as speculators or other participants exercise option contracts.</Lefttext>
        </Secondtext>
        <Secondtext>
        <Righttext>Generating residual funding through premiums collected and exercises made</Righttext>
    </Secondtext>
        </Backimg>
    )
}

export default TreasuryPage


const Backimg=styled.div`
position:relative;
background-size: cover;
justify-content:space-between;
display:flex;
flex-direction:column;
height:120vh;
align-items:center;
@media screen and (max-width:1024px){
    height:120vh;
   }
`
const Toptext1 = styled.div`
position : absolute;
text-align: left;
background-color:transparent;
align-items:center;
justify-content:center;
margin-left:20rem;
margin-top:16rem;
@media screen and (max-width:1024px){
    margin-left:12rem;
   }
  @media screen and (max-width:768px){
    margin-left:10rem;
    margin-top:5rem;
   }
  @media screen and (max-width:425px){
    margin-left:0rem;
    width:100%;
    margin-top:2rem;
     }
     @media screen and (max-width:375px){
        margin-left:0rem;
        width:100%;
        margin-top:2rem;
     }
     @media screen and (max-width:320px){
        margin-left:0rem;
        width:100%;
        margin-top:2rem;
     }
`

const Toptext1head = styled.div`
font-family: Goldman;
font-size: 24px;
color: #E4F5FF;
padding:1rem;
text-align: left;
background-color:black;
width:75%;
letter-spacing:1px;
box-shadow: 8px 8px 0px #8BEAFF;
@media screen and (max-width:768px){
   
    width:75%;
     }
@media screen and (max-width:425px){

    width:100%;
     }
     @media screen and (max-width:375px){
      
        width:100%;
     }
     @media screen and (max-width:320px){
     
        width:100%;
     }
`

const Toptext1para = styled.div`
color: #E4F5FF;
font-family: 'Manrope', sans-serif !important; 
width:border-box !important;
background-color:black;
font-size:15px !important;
padding:1rem 0;
letter-spacing:0px;
line-height: 22.32px;
`


const Secondtext = styled.div`
position : absolute;
margin-top:27rem;
background-color:transparent;
display:flex;
flex-direction:row;
@media screen and (max-width:768px){
    margin-top:18rem;
     }
@media screen and (max-width:425px){
    margin-top:16rem;
     }
     @media screen and (max-width:375px){
      
        margin-top:20rem;
     }
     @media screen and (max-width:320px){
        margin-top:20rem;

     }
`
const Lefttext= styled.div`
display:flex;
font-family: Goldman;
font-size: 15px;
color: #E4F5FF;
letter-spacing:2px;
box-shadow: 8px 8px 0px #8BEAFF;
padding:1rem;
text-align: left;
background-color:black;
width:26%;
text-transform: uppercase;
margin-left:20rem;
@media screen and (max-width:1024px){
    margin-left:12rem;
    padding-top:2rem;
    letter-spacing:1px;
     }
@media screen and (max-width:768px){
    margin-left:10rem;
    padding-top:0rem;
    letter-spacing:1px;
     }
@media screen and (max-width:425px){
    padding-top:0rem;
    width:50%;
    letter-spacing:1px;
    margin-left:0rem;
     }
     @media screen and (max-width:375px){
        margin-left:0rem;
        padding-top:0rem;
        width:50%;
        letter-spacing:1px;

     }
     @media screen and (max-width:320px){
        margin-left:0rem;
        padding-top:0rem;
        width:50%;
        letter-spacing:1px;

     }
`
const Righttext= styled.div`
display:flex;
font-family: Goldman;
font-size: 15px;
color: #E4F5FF;
letter-spacing:2px;
box-shadow: 8px 8px 0px #8BEAFF;
padding:1rem;
text-align: left;
background-color:black;
width:27%;
text-transform: uppercase;
margin-left:45.5rem;
padding-bottom:1rem;
@media screen and (max-width:1024px){
    margin-left:33rem;
    padding-top:2rem;
    letter-spacing:1px;
     }
@media screen and (max-width:768px){
    margin-left:25rem;
    padding-top:0rem;
    letter-spacing:1px;
     }
@media screen and (max-width:425px){
    margin-left:14rem;
    padding-top:0rem;
    width:46%;
    letter-spacing:1px;

     }
     @media screen and (max-width:375px){
        margin-left:12.5rem;
        padding-top:0rem;
        width:46%;
        letter-spacing:1px;

     }
     @media screen and (max-width:320px){
        margin-left:11rem;
        padding-top:0rem;
        width:44%;
        letter-spacing:1px;

     }
`