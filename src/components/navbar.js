import React from 'react';
import logo from "../logo.svg";

const NaviBar = props => {

    return (    
        <div className="navibar">
            <nav>
                <img src={logo} width="40px" height="40px"></img>
           <a href="#main" className="navi">Home</a>
            <a href="#mian" className="navi">Articles</a>
            <a href="#main" className="navi">Contact</a>
            <a href="#main" className="navi">Me</a>
            </nav>
        </div>
                )
}

export default NaviBar;