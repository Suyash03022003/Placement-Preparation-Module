import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcon] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <div className="nav-logo">
          <img
            src={process.env.PUBLIC_URL + '/images/diagram.png'}
            alt="Logo"
            style={{ width: '50px', height: '50px' }}
          />
        </div>

        <div className={showMediaIcons ? 'nav-links mobile-menu-link' : 'nav-links'}>
          <ul>
            <li><Link to="/" className='sep-link'>Home</Link></li>
            <li><Link to="/programming" className='sep-link'>Programming</Link></li>
            <li><Link to="/dsasyllabus" className='sep-link'>DSA Syllabus</Link></li>
            <li><Link to="/cheatsheet" className='sep-link'>Cheatsheet</Link></li>
            <li><Link to="/queries" className='sep-link'>Any queries</Link></li>
          </ul>
        </div>

        <div className="nav-login">
          <ul className="nav-login-desktop">
            <li>
              <img
                src={process.env.PUBLIC_URL + '/images/bell_white.png'}
                alt="Bell"
                style={{ width: '40px', height: '40px', marginRight: '20px' }}
              />
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + '/images/user.png'}
                alt="User"
                style={{ width: '45px', height: '45px', marginRight: '20px' }}
              />
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcon(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
