import React from 'react';
import './navbar.less'
import appleLogo from '../../assets/images/apple_logo_grey.svg.png'
import SignInButton from '../auth/login/SignInButton';

function Navbar() {
  return (
    <div className="header">
      <div className="navbar">
        <img className="navbar__apple-logo" src={appleLogo} alt="img"/>
        <ul className="navbar__list">
          <li>Магазин</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>TV</li>
          <li>Music</li>
        </ul>
        <div className="navbar__cart-logo">
          <span className="material-icons">
            local_mall
          </span>
        </div>
        <SignInButton />
      </div>
    </div>
  );
}

export default Navbar;