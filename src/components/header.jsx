import React from 'react';
import '../styles/header.css';
import logo from '../assets/LOGO.png';

const Header = () => {
  return (
    <nav className='header'>
      <img className='logo' src={logo}  alt="Logo Eurocasa" />
      <ul className="navbar">
        <li>
          <a href="/">INICIO</a>
        </li>
        <li>
          <a href="/">PRODUCTOS</a>
        </li>
        <li>
          <a href="/">CONTACTO</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
