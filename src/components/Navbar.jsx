import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
function Navbar() {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to={'/'}>
          Characters
        </Link>
        <Link to={'/randomcharacter'}>
          Random Character
        </Link>
        <Link to={'/deaths'}>
          Deaths
        </Link>
        <Link to={'/randomdeath'}>
          Random Death
        </Link>
        <Link to={'/quotes'}>
          Quotes
        </Link>
        <Link to={'/epizodes'}>
          Epizodes
        </Link>
      </div>
      <div className='logo'>
        TBB
      </div>
    </div>
  )
};
export default Navbar;