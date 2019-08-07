import React from 'react';
//import logo from "../logo.svg";
import styled from 'styled-components';
import {Web} from 'styled-icons/material/Web';
import widithDiv from './projConstans';

//Link =  <img src={logo} width="40px" height="40px" alt="obrazek"></img>

const MenuLinkStyl = styled.a`
padding : 10px;
color:whitesmoke;
font-size: 17px;
&:hover {
    background-color: whitesmoke;
    color: darkgrey;
    }
`;

const NaviMenu = styled.div`
width: ${widithDiv};
grid-row-start: 1;
background-color: #282c34;
color: white;
padding-top: 5px;
padding-bottom: 5px;
`;

const IconWeb = styled(Web)`
color: whitesmoke;
font-size: 17px;
height: 30px;
`

const NaviBar = () => {
    return (  
        <NaviMenu>
                <IconWeb />
                <MenuLinkStyl href="#main">Home</MenuLinkStyl>
                <MenuLinkStyl href="#main">Articles</MenuLinkStyl>
                <MenuLinkStyl href="#main">Contact</MenuLinkStyl>
                <MenuLinkStyl href="#main">Me</MenuLinkStyl>
        </NaviMenu>  
                );
}

export default NaviBar;