import React from 'react';
import './nav.css';
import navlogo from '../../assets/image/nav logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Nav = () => {
  const [modal, setModal] = useState(0);
    return (
        <div className='cont'>
           <div className='subhead'>
           <div className='nav-col1'>
           <img src={navlogo} alt="logo" className="nav-logo" />
             <ul className='nav-list'>
                <li>Features</li>
                <li>Weathery Business</li>
                <li>News</li>
                <li>Career</li>
                <li>About Us</li>
                <li>FAQs</li>
             </ul>
             </div>
             <div className='btns'>
             <div className='btn1'>Contact Us</div>
             <button className='btn2'>Get Started</button>
            
           <div
             className="menu"><GiHamburgerMenu
              onClick={() => {setModal(!modal);}} 
              className="hamburger"/>
               </div>
             </div>
             </div>
             {modal ? (
        <div className="modal">
          <ul>
                <li>Features</li>
                <li>Weathery Business</li>
                <li>News</li>
                <li>Career</li>
                <li>About Us</li>
                <li>FAQs</li>
                <li>Contact Us</li>
          </ul>
        </div>
      ) : (
        ""
      )}
        </div>
    )
};
export default Nav;