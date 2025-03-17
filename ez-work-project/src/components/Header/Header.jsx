import React from 'react';
import './Header.css';
import logo from '../../assets/ezlogo.png';

const Header = () => {
  return (
    <div className="header-wrapper">
      <img src={logo} alt="EZ Works Logo" className="header-logo" />
      <h1 className="header-title">  </h1>
    </div>
  );
};

export default Header;