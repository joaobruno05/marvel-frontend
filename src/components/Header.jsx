import React from 'react';
import Logo from '../images/marvel-logo.png';
import '../styles/header.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="marvel" />
      </div>
    </header>
  );
}

export default Header;
