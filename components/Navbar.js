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
        <a href="https://purrfect-verbena-aa2.notion.site/Focuscoin-Whitepaper-79d176f0b40e4f838f2886607902f715" target="_blank" rel="noopener noreferrer">Whitepaper</a>
      </nav>
      {/* <nav>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
        <Link href="/wallet">Wallet</Link>
      </nav> */}
    </header>
  );
};

export default Navbar;