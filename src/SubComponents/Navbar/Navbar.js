import React from 'react'
import logo from '../images/logo.png'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { NavLink } from 'react-router-dom'

import styled from "styled-components"; 

const LinkNav=styled(NavLink)``


function Navbar(props) {
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
        <LinkNav to="/" className="menu-btn" id={props.home}>Home</LinkNav>
        <LinkNav to="/jesus" className="menu-btn" id={props.jesus}>About Jesus</LinkNav>
        <LinkNav to="/about" className="menu-btn" id={props.us}>About Us</LinkNav>
        <LinkNav to="/" className="menu-btn" id={props.vision}>Vision &amp; Mission</LinkNav>
        <div className="dropdown">
          <button className="dropbtn" id={props.ministry}>Ministries
            <FontAwesomeIcon className='icn' icon={faCaretDown} />
          </button>
          <div className="dropdown-content">
            <LinkNav to="/" className="menu-btn" id={props.sunday}>Sunday School</LinkNav>
            <LinkNav to="/youth" className="menu-btn" id={props.youth}>Youth Ministry</LinkNav>
            <LinkNav to="/women" className="menu-btn" id={props.women}>Women's Ministry</LinkNav>
            <LinkNav to="/" className="menu-btn" id={props.bible}>Bible Study</LinkNav>
            <LinkNav to="/" className="menu-btn" id={props.prayer}>Prayer Ministry</LinkNav>
          </div>
        </div>

        <LinkNav to="/contact" className="menu-btn" id={props.contact}>Contact Us</LinkNav>

        <a href="javascript:void(0);" style={{ fontSize: '15px' }} className="icon" onClick={() => myFunction()}>☰</a>
        <button className='mobile-menu-icon'>{isMobile ? <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}</button>
      </div>
    </div>
  )
}

export default Navbar