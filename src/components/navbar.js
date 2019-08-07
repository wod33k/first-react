import React from 'react';
import logo from "../logo.svg";
import styled from 'styled-components';


//Link = 

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
background-color: #282c34;
color: white;
padding: 5px;
`;


const NaviBar = () => {
    return (  
        <NaviMenu>
                <img src={logo} width="40px" height="40px" alt="obrazek"></img>
                <MenuLinkStyl href="#main">Home</MenuLinkStyl>
                <MenuLinkStyl href="#main">Articles</MenuLinkStyl>
                <MenuLinkStyl href="#main">Contact</MenuLinkStyl>
                <MenuLinkStyl href="#main">Me</MenuLinkStyl>
        </NaviMenu>  
                );
}

export default NaviBar;