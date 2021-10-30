import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header-container'>
      <div class='header-links'>
        <div className='header-link-wrapper'>
          <div class='header-link-items'>
            <Link to='/'><img className='header-icon' src='./../../images/mail.png' /> <h5> medcare@med.care</h5></Link>
            <Link to='/'><img className='header-icon' src='./../../images/location.png' /><h5> Find our location</h5></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;