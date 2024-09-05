import React, { useState } from "react";
import "./header.css"; // Import the CSS file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Venus Sports</h1>
      </div>
      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Features</li>
          <li className="nav-item">Pricing</li>
          <li className="nav-item">FAQs</li>
          <li className="nav-item">About</li>
        </ul>
      </nav>

      <div className="menu-toggle" onClick={toggleMenu}>
        <div class="dropdown">
          <span
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ☰
          </span>

          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
