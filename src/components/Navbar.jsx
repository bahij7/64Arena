import React from 'react';
import 'C:/CodeBoi/64arena/src/style.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
 

  return (
    <>
      <div className="navbar-phone">
        <Link to="/" className="logo">64.</Link>
        <p id='menu'>MENU</p>
      </div>

  

      <div className="navbar">
        <a href="#gallery">Gallery</a>
        <Link to="/Booking">Réservation</Link>
        <Link to="/" className="logo">64.</Link>
        <Link to="/Booking">Plans</Link>
        <a href="#faq">FAQ</a>
      </div>
    </>
  );
}

export default Navbar;
