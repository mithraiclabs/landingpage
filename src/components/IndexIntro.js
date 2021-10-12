import React from 'react';
// import styled from "styled-components";
import RetroLogo from "../images/Retro logo2.png";
import "./IndexIntro.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hc-announcement">
        <h1>AMERICAN STYLE OPTIONS, ANYTIME, ANYWHERE</h1>
        <div>Trade completely trustless American style options for any SPL token.</div>
        <div>
{/*          <span>
           <NavBtn>
             <Button1 to="/">Start trading</Button1>
             <Button2 to="/">Read our docs</Button2>
           </NavBtn>
         </span>*/}
        </div>
      </div>
      <img src ={RetroLogo} alt="retrologo"/>
    </div>
  )
}

export default Home

// const HomeContainertextpara = styled.div `


// justify-content: center,
// align-items: center,
// color: #E4F5FF;
// font-family: 'Manrope', sans-serif;
// line-height: 27.32px;
// font-size:20px;
// padding:2rem 0;
// @media screen and (max-width:425px){
//   width:100%;
//   font-size:10px;
//  }
// `
// const HomeContainertext =styled.div `



// align-items:center;
// font-size: 32px;
// line-height: 200%;
// color: #E4F5FF;
// text-shadow: 0px 0px 20px #0347F7;
// padding-left:5rem;
// padding-top:6rem ;
// font-family:Goldman,cursive;
// letter-spacing:5px;
// @media screen and (max-width:425px){
//     width:100%;
//     font-size: 18px;
//     padding-left:1rem;
//   }
 
// `
// const HomeContainerimg =styled.div `

// @media screen and (max-width:768px){
//   width:100% !important;
// height:100%;
//  }
// @media screen and (max-width:425px){
//   width:100% !important;
//   height:100%;
 
//   }
//   @media screen and (max-width:375px){
//     width:100% !important;
// height:100%;
  
//    }
//    @media screen and (max-width:320px){
//     width:100% !important;
//     height:100vh !important;
//     display:block;
//    }
// `
// const NavBtn = styled.div`

// cursor:pointer;
// font-family: 'Manrope', sans-serif;
// @media screen and (max-width:768px){
//   display:flex  !important;
 
// }
// @media screen and (max-width:425px){
//   display:block;
 
// }
// @media screen and (max-width:375px){
//   display:block;
 
// }
// @media screen and (max-width:320px){
//   display:flex !important;
 
// }
// `

// const Button1 =styled.button
// `
// background-color: #8BEAFF;
// white-space:wrap;
// padding:${({big})=>(big ? '8px 10px':'10px 12px')};
// color:black;
// font-size:${({big})=>(big ? '20px':'16px')};
// outline:none;
// border:2px solid #8BEAFF;
// min-width:100px;
// cursor:pointer;
// text-decoration:none;
// transition: 0.3s !important;
// border-radius:4px;
// font-family: 'Manrope', sans-serif;
// &: hover{
//     background:black;
//     color:#8BEAFF;
//     transform:translate(-2px);
   
// }

// `
// const Button2=styled.button
// `
// background:${({primary})=>(primary ? '#8BEAFF': 'transparent')};
// white-space:wrap;
// padding:${({big})=>(big ? '8px 10px':'10px 12px')};
// color:#8BEAFF;
// font-size:${({big})=>(big ? '20px':'16px')};
// outline:none;
// border:2px solid #8BEAFF;
// min-width:100px;
// cursor:pointer;
// text-decoration:none;
// transition: 0.3s !important;
// border-radius:4px;
// font-family: 'Manrope', sans-serif;
// margin-left:20px;
// &: hover{
//     background:${({primary})=>(primary ? 'transparent': '#8BEAFF')};
//     color:black;
//     transform:translate(-2px);
// }
// 
// `
