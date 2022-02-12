import React from 'react';
import '../styles/header.css';
import logo from '../assets/LOGO.png';

const Header = () => {
  return (
    <nav className='header'>
      <img className='logo' src={logo}  alt="Logo Eurocasa" />
      <ul className="navbar">
        <li id='inicio'>
          <a href="/">INICIO</a>
        </li>
        <li id='productos'>
          <a href="/">PRODUCTOS</a>
        </li>
        <li id='contacto'>
          <a href="/">CONTACTO</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
