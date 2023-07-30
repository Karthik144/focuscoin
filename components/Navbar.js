import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link';
import logoImage from '../public/logo.svg';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Image className="nav-logo" src={logoImage} alt="Logo"/>
        <h1 className="nav-title">focuscoin</h1>
      </div>
      <nav>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
        <Link href="/wallet">Wallet</Link>
      </nav>
    </header>
  );
};

export default Navbar;