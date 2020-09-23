import React from "react";
import logo from '../pictures/logo.svg'

const Navbar = () => {
  return (
    <div>
        <header>
            <div className='container'>
            <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <a href='/'>Features</a>
          </li>
          <li>
            <a href="/">Sign In</a>
          </li>
          <li>
            <a href="/">Team</a>
          </li>
        </ul>
      </nav>
            </div>
        </header>
      
    </div>
  );
};

export default Navbar;
