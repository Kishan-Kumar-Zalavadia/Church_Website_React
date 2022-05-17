import React from 'react'
import logo from '../images/logo.png'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { NavLink } from 'react-router-dom'
import AboutUs from '../../Components/AboutUs';

import styled from "styled-components"; 

const LinkNav=styled(NavLink)``


function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  {/*const handleClick = () =>{ setClick(!click);
   };*/}
  const myFunction = () =>{
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div>
      <nav className="navbar">
        <div className="max-width">
          <img width="150px" height="50px" src={logo} alt="" />
        </div>
      </nav>
      <div className={isMobile ? "topnav-mobile" : "topnav"} id="myTopnav">
        <LinkNav to="/" className="menu-btn" id="active">Home</LinkNav>
        <div className="dropdown">
          <button className="dropbtn">About Jesus
            <FontAwesomeIcon className='icn' icon={faCaretDown} />
          </button>
          <div className="dropdown-content">
            <LinkNav to="/about" className="menu-btn">About Us</LinkNav>
          </div>
        </div>
        <LinkNav to="/vision" className="menu-btn">Vision &amp; Mission</LinkNav>
        <div className="dropdown">
          <button className="dropbtn">Ministries
            <FontAwesomeIcon className='icn' icon={faCaretDown} />
          </button>
          <div className="dropdown-content">

            <a href="Events/sundaySchool.html">Sunday School</a>
            <a href="Events/youth.html">Youth Ministry</a>
            <a href="Events/womens.html">Women's Ministry</a>

            <a href="Events/oathCeremony.html">Bible Study</a>
            <a href="Events/more.html">Prayer Ministry</a>
          </div>
        </div>

        <LinkNav to="/contact" className="menu-btn">Contact Us</LinkNav>

        <a href="javascript:void(0);" style={{ fontSize: '15px' }} className="icon" onClick={() => myFunction()}>☰</a>
        <button className='mobile-menu-icon'>{isMobile ? <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}</button>
      </div>
    </div>
  )
}

export default Navbar