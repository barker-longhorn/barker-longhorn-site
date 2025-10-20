import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">🔧 Barker-<span>Longhorn</span></div>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
