import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="burger-icon" onClick={toggleMenu}>
        <FiMenu />
      </div>

      {window.innerWidth <= 576 ? (
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <a className="menu-item" href="/" onClick={toggleMenu}>
            Home
          </a>
          <a className="menu-item" href="/about" onClick={toggleMenu}>
            About
          </a>
          <a className="menu-item" href="/services" onClick={toggleMenu}>
            Services
          </a>
          <a className="menu-item" href="/contact" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      ) : (
        <div className="desktop-menu">
          <a className="menu-item" href="/">
            Home
          </a>
          <a className="menu-item" href="/about">
            About
          </a>
          <a className="menu-item" href="/services">
            Services
          </a>
          <a className="menu-item" href="/contact">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
