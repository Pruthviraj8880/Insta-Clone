import React from 'react';
import { Heart, Search, SquarePlus, Home, MessageCircle, Compass } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <h1 className="logo">Instagram</h1>
        <div className="search-bar">
          <Search size={16} color="#8e8e8e" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav-icons">
          <Home size={24} />
          <MessageCircle size={24} />
          <SquarePlus size={24} />
          <Compass size={24} />
          <Heart size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
