import React from 'react';
import Image from 'next/image'; 
import logoImage from '../public/logo.svg';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Image className="nav-logo" src={logoImage} alt="Logo"/>
        <h1 className="nav-title">focuscoin</h1>
      </div>
      <nav>
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
        <a href="/wallet">Wallet</a>
      </nav>
    </header>
  );
};

export default Navbar;