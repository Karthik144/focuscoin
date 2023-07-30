import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <h1>focuscoin</h1>
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