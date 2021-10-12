import React from 'react'
import styled from 'styled-components'
import Gradient from "../images/Gradient.png"

const IndexLaunch = () => {
    return (
        <Backimg>
            <Img><img src ={Gradient} alt="Gradient"/></Img>
          
         
         
            <Toptext1>
        <Toptext1head>   HOW PSYOPTIONS CAN HELP YOU
        <Toptext1para>Hedge against volatile crypto currencies with options.</Toptext1para>
        </Toptext1head>
        
       </Toptext1><NavBtn>
     <Button1 to="/">Launch our app</Button1>
     
     </NavBtn>
      
         </Backimg>
    )
}

export default IndexLaunch;

const Backimg = styled.div`

position:relative;
background-size: cover;
justify-content:center;
align-items:center;
display:flex;
flex-direction:column;
height:100vh;
@media screen and (max-width:2560px){
    
    height:10vh;
}
`
const Img=styled.div`
background-color:#000;
opacity:0.4;
filter: blur(2px);
background-size: cover;
text-align:center !important;

`
const Toptext1 = styled.div`
position : absolute;
text-align: center;
background-color:transparent;
align-items:center;
justify-content:center;


`

const Toptext1head = styled.div`
font-family: Goldman;
font-size: 25px;
color: #E4F5FF;
text-align: center;
background-color:transparent;
letter-spacing:2px;

`

const Toptext1para = styled.div`
color: #8BEAFF !important;
font-family: 'Manrope', sans-serif !important; 
width:border-box !important;
background-color:transparent;
font-size:15px !important;
padding:1rem;

`

const NavBtn = styled.div`
position : absolute;
text-align: center;
background-color:transparent;
align-items:center;
justify-content:center;
cursor:pointer;
font-family: 'Manrope', sans-serif;
margin-top:8rem;
@media screen and (max-width:425px){
    margin-top:10rem;
 
}
`

const Button1 =styled.button
`

background-color: #8BEAFF;
padding:${({big})=>(big ? '8px 10px':'10px 12px')};
color:black;
font-size:${({big})=>(big ? '20px':'16px')};
outline:none;
border:2px solid #8BEAFF;
min-width:100px;
cursor:pointer;
text-decoration:none;
transition: 0.3s !important;
border-radius:4px;
font-family: 'Manrope', sans-serif;
&: hover{
    background:black;
    color:#8BEAFF;
    transform:translate(-2px);
}

`