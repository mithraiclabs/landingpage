import "./IndexBlockchain.scss";
import React from "react";
import styled from "styled-components"
import background from "../images/Background.png";
import cube from "../images/Cube.png";

const BlockchainPage = () => {
  return (
    <div className="index-blockchain">
      <div className="ib-left-group">
        <img src ={cube} alt="Solana Blockchain Foundations cube"/>
        <h1 className="iblg-title">
          SOLANA BLOCKCHAIN FOUNDATIONS
        </h1>
      </div>
      <div className="ib-right-group">
        <div className="ibrg-block">
          <h1 className="ibrgb-title">
            The options are limitless.
          </h1>
          <div className="ibrgb-text">
            PsyOptions aims to become one of the foundational DeFi primitives on the Solana blockchain by offering completely trustless American style options for any SPL token.
          </div>
        </div>
        <div className="ibrg-block">
          <div className="ibrgb-text">
            Providing this clearing house infrastructure to the Solana ecosystem will allow for increased composability between protocols, helping teams align incentives between themselves, their investors, their community members, and more.
          </div>
        </div>
      </div>
    </div>
  );
}

//     return (
//       <Backgroundimg>
//         <img src ={background} alt="background"/>
//         <Lefttext>
//           <img src ={cube} alt="cube"/>
//           <Lefttexttitle>
//             SOLANA BLOCKCHAIN FOUNDATIONS
//           </Lefttexttitle>
//         </Lefttext> 
//         <Righttext>
//           <Righttext1>
//             <Righttext1head>The options are limitless.
//               <Righttext1para>PsyOptions aims to become one of the foundational DeFi primitives on the Solana blockchain by offering completely trustless American style options for any SPL token.</Righttext1para>
//             </Righttext1head>
//           </Righttext1>
//           <Righttext2>
//             <Righttext2para>Providing this clearing house infrastructure to the Solana ecosystem will allow for increased composability between protocols, helping teams align incentives between themselves, their investors, their community members, and more.</Righttext2para>
//           </Righttext2>
//         </Righttext>
//       </Backgroundimg>
//     )
// }
export default BlockchainPage

const Backgroundimg = styled.div`
background-position:cover;
position:relative !important;
justify-content:center;
display:flex;
height:100vh;
@media screen and (max-width:2560px){
  width:100%;
  height:100vh;
}
@media screen and (max-width:1440px){
  width:100%;
  height:100vh;
}
@media screen and (max-width:768px){
    width:100%;
    
}
@media screen and (max-width:425px){
    width:100%;
    display:flex;
    height:120vh;
}
@media screen and (max-width:375px){
    width:100%;
    display:flex;
    height:110vh;
}
@media screen and (max-width:320px){
    width:100%;
    display:flex;
    height:110vh;
}
`


const Lefttext = styled.div`
position:absolute;
text-align: right;
margin-top:19rem;
padding-right:45rem;
padding-left:20rem;
background-color:transparent;
@media screen and (max-width:2560px){
  width:100%;
  margin-top:36rem;
  padding-right:85rem;
  padding-left:55rem;
}
@media screen and (max-width:1440px){
  width:100%;
  margin-top:19rem;
  padding-right:46rem;
  padding-left:20rem;
}
@media screen and (max-width:1024px){
    
    width:100%;
    margin-top:12rem;
    padding-right:33rem;
    padding-left:13rem;
    
  }
@media screen and (max-width:768px){
    
    width:100%;
    margin-top:16rem;
    padding-right:27rem;
    padding-left:1rem;
    
  }
@media screen and (max-width:425px){
    width:100%;
    margin-top:4rem;
    padding-right:7rem;
    padding-left:3rem;
  }
  @media screen and (max-width:375px){
    width:100%;
    margin-top:4rem;
    padding-right:10rem;
    padding-left:1rem;
  }
  @media screen and (max-width:320px){
    width:100%;
    margin-top:4rem;
    padding-right:8rem;
    padding-left:1rem;
  }
`

const Lefttexttitle =styled.div `
font-size:30px;
line-height: 100%;
color: #E4F5FF;
text-shadow: 0px 0px 20px #0347F7;
background-color:transparent;
font-family:Goldman,cursive;
letter-spacing:2px;
line-height: 38px;
align-items: center;
text-align: right;
@media screen and (max-width:768px){
    line-height: 30px;
    width:100%;
    font-size:25px;
  }
@media screen and (max-width:425px){
  
    width:100%;
    font-size:20px;
    line-height: 25px;
  }
  @media screen and (max-width:375px){
 
    width:100%;
    font-size:15px;
    line-height: 23px;
  }
  @media screen and (max-width:320px){
   
    width:100%;
    font-size:15px;
    line-height: 21px;
  } 
`
const Righttext = styled.div`
position : absolute;
@media screen and (max-width:2560px){

  margin-top:20rem;
 
}
@media screen and (max-width:1440px){

  margin-top:0rem;
 
}
@media screen and (max-width:1024px){
    
  
    margin-top:0rem;
   
    
  }
  @media screen and (max-width:768px){
    
  
    margin-top:0rem;
   
    
  }
@media screen and (max-width:425px){

    display:block;
    margin-top:2rem;
    padding:1rem;
    width:100%;
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
const Righttext1 = styled.div`
position : absolute;
text-align: left;
background-color:transparent;

`
const Righttext2 = styled.div`
position : absolute;
text-align: left;
background-color:transparent;
`
const Righttext1head = styled.div`
font-family: Goldman;
font-size: 25px;
color: #E4F5FF;
margin-top:10rem;
padding-left:1rem;
padding-top:1rem;
text-align: left;
background-color:#05044D;
width:343%;
letter-spacing:1px;
box-shadow: 4px -4px 0px #DD3E76, -6px 6px 0px #1D4DC9;
@media screen and (max-width:1024px){
    margin-top:5rem;
    font-size: 18px;
    width:310%;
    letter-spacing:2px;
     }
@media screen and (max-width:768px){
    margin-top:5rem;
    font-size: 17px;
    width:259%;
    letter-spacing:1px;
       
    
  }
@media screen and (max-width:425px){
    margin-top:10rem;
    font-size: 19px;
    width:100%;
    letter-spacing:0px;
   
       
  }
  @media screen and (max-width:375px){
    margin-top:10rem;
    font-size: 17px;
    width:100%;
    letter-spacing:0px;
    
  }
  @media screen and (max-width:320px){
    margin-top:9rem;
    font-size: 17px;
       
  }
`
const Righttext2para = styled.div`
font-family: 'Manrope', sans-serif;
color: #E4F5FF;
margin-top:23rem;
padding:1rem;
text-align: left;
background-color:#05044D;
width:343%;
line-height: 22.32px;
letter-spacing:1px;
box-shadow: 4px -4px 0px #DD3E76, -6px 6px 0px #1D4DC9;
@media screen and (max-width:1024px){
    width:272%;
    font-size: 15px;
    
    line-height: 20.32px;
    margin-top:18rem;
  }
  @media screen and (max-width:768px){
    width:210%;
    font-size: 15px;
   
    line-height: 20.32px;
    margin-top:19rem;
  }
  @media screen and (max-width:425px){
    margin-top:22rem;
    font-size: 15px;
    width:100%;

    
  }
  @media screen and (max-width:375px){
    margin-top:21rem;
    font-size: 15px;
    width:100%;
 
}
  @media screen and (max-width:320px){
    margin-top:20.5rem;
    font-size: 15px;
    width:100%;
    
}
@media screen and (max-width:280px){
    margin-top:24rem;
  
}
`
const Righttext1para = styled.div`
color: #E4F5FF;
font-family: 'Manrope', sans-serif !important; 
width:border-box !important;
background-color:#05044D;
font-size:15px !important;
padding:1rem 0;

line-height: 22.32px;
@media screen and (max-width:1024px){
  
    font-size: 15px;
    
    letter-spacing:1px;
    
    padding-top:1rem;
  }
  @media screen and (max-width:768px){
  
    font-size: 10px;
    line-height: 20.32px;
    letter-spacing:1px;
    padding-top:1rem;
  }
  @media screen and (max-width:425px){
  
    font-size: 11px;
   
    letter-spacing:1px;
    
    padding-top:1rem;
   
  }
`


