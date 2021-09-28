import { Link } from "gatsby";
import styled from "styled-components";

export const Nav =styled.nav `
background-color: transparent;
height:80px;
display:flex;
font-size:1rem;
font-family: 'Manrope', sans-serif;   
position:sticky !important;
top:0;
z-index:999;
width:100%;
@media screen and (max-width:425px){
 transition:0.8s all ease;
 position:sticky !important;
 width:100% !important;

   }
`
export const NavbarContainer=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
max-width:100%;
@media screen and (max-width:425px){
      position:sticky !important;
    width:100% !important;
   
      }
`

export const NavLogo = styled(Link)`

align-items:left;
padding:1rem 0rem;
color:white;
justify-self:self-start;
margin-left:3rem !important;
`

export const MobileIcon= styled.div`
display:none;

@media screen and (max-width:425px){
    display:block;
    position:absolute;
    top:0;
    right:0 ;
    transform:translate(-100%,60%);
    font-size:2.5rem;
    cursor:pointer;
    color: white !important;
              }
`
export const NavMenu = styled.ul`
display:flex;
align-items:center;
justify-content:center;
list-style:none;
text-align:center;
margin-left:2rem;

@media screen and (max-width:425px){
   flex-direction:column;
   width:100%;
   height:60vh;
   position:absolute;
   top:80px;
   top:${({click})=>(click?"100%":"-1000px")};
   opacity:1;
   margin-left:0;
   margin-right:0;
   transition: all 0.2s ease;
   background:black;
      }
`
export const NavItem=styled.li`
height:80px;

@media screen and (max-width:425px){
  width:100%;
       }
`
export const NavLinks=styled(Link)`
color:#8BEAFF;
display:flex;
text-decoration:none;
align-items:center;
justify-content:center;
padding-top:2rem;
padding-right:3rem;
&:hover{
    color:white;
      transform:translate(-2px);
    
}
@media screen and (max-width:425px){
    width:100%;
    align-items:center;
justify-content:center;
padding:0;
         }

`
export const NavBtn=styled.div`
display:block;
align-items: center;
margin-right:0rem !important;
background-color:black;
color: #8BEAFF;
font-family: 'Manrope', sans-serif;
background:${({primary})=>(primary ? '#8BEAFF': 'transparent')};
padding:${({big})=>(big ? '16px 40px':'10px 32px')};
font-size:${({big})=>(big ? '20px':'16px')};
border:2px solid #8BEAFF;
cursor:pointer;
text-decoration:none;
transition: 0.3s !important;
border-radius:4px;
font-family: 'Manrope', sans-serif;
&: hover{
    background:${({primary})=>(primary ? 'transparent': '#8BEAFF')};
    color:black;
    transform:translate(-2px);
}
@media screen and (max-width:1024px){
 
   
 }
@media screen and (max-width:768px){
   
   
 }
                 @media screen and (max-width:425px){
                                      margin-bottom:2rem;
                   width:50%;
                }

`