import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <Link to ='/'>
        <h3 className="link-style">Un vin pe zi</h3>
        </Link>
        <ul className="nav-links">
          <Link to ='/about'>
            <li className="link-style">About</li>
            </Link>
            <Link to ='/contact'>
            <li className="link-style">Contact</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
