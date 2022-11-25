import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import "./Nav.css";
import ReusableButton from './ReusableButton';
import logga from './logga.png'




const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false);



    const navStyle = {
        color: 'black',
        textDecoration: 'none',
    };

    const logoStyle = {
        width: '70px',
        marginLeft: '7rem'
    }

    const iconStyle = {
        fontSize: '50px',
        cursor: 'pointer'
    }

    return (
        <nav>
            <img style={logoStyle} src={logga}/>
            <ul className="nav-links-style">
                <li><Link style={navStyle} to="/">Home</Link></li>
                <li><Link style={navStyle} to="/About">About Us</Link></li>
                <li><Link style={navStyle} to="/Homes">Homes for sale</Link></li>
                <li><Link style={navStyle} to="/Services">Our Services</Link></li>
                <li><Link style={navStyle} to="/Blog">Blog</Link></li>
                         
                <li className='contact-button'><Link style={navStyle} to="/Contact"><ReusableButton>Contact</ReusableButton></Link></li>      
            </ul>

        {/* <div> */}
        <div className="nav-small-screen">
            <i className="bi bi-list 8xl" style={iconStyle}  fontSize={27} onClick={() => setToggleMenu(true)}></i>
            </div>
            
            {toggleMenu && (
            <div className="nav-small-screen-overlay">
                <i class="bi bi-x " style={iconStyle}fontSize={27} alt="close" onClick={() => setToggleMenu(false)}></i>
            <ul className="nav-small-links">
                <li><Link style={navStyle} to="/">Home</Link></li>
                <li><Link style={navStyle} to="/About">About Us</Link></li>
                <li><Link style={navStyle} to="/Homes">Homes for sale</Link></li>
                <li><Link style={navStyle} to="/Services">Our Services</Link></li>
                <li><Link style={navStyle} to="/Blog">Blog</Link></li>
                   
                <li><Link style={navStyle} to="/Contact"><ReusableButton>Contact</ReusableButton></Link></li>        
            </ul>
            </div>
            )}
        </nav>
    );
}

export default Nav;
