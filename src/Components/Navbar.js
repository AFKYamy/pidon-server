import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from './Button.js';

export default function Navbar() {
    const location = useLocation();

    return (
      <nav className="nav container">
      <div className="nav__wrapper">
        <div className="nav__logo">
          <h1><a href="#"><span>Pidon</span>Egh</a></h1>
        </div>
        <div className="nav__links__wrapper">
          <ul className="nav__links">
            <li>
              <Link 
                to="/" 
                className={`nav__link ${location.pathname === "/" ? "nav__link--active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/LiveMap" 
                className={`nav__link ${location.pathname === "/LiveMap" ? "nav__link--active" : ""}`}
              >
                Live Map
              </Link>
            </li>
            <li>
              <Link 
                to="/Inventory" 
                className={`nav__link ${location.pathname === "/Inventory" ? "nav__link--active" : ""}`}
              >
                Inventory
              </Link>
            </li>
            <li>
              <Link 
                to="/Members" 
                className={`nav__link ${location.pathname === "/Members" ? "nav__link--active" : ""}`}
              >
                Members
              </Link>
            </li>
            <li>
              <Link 
                to="/About" 
                className={`nav__link ${location.pathname === "/About" ? "nav__link--active" : ""}`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav__btns">
        <Link to="/Contact">
            <Button text="Contact" />
        </Link>
        </div>
      </div>
    </nav>
  );
}