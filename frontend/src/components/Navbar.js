import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav">
      <div className="header-top">
        <div className="logo">
          <img
            src={process.env.PUBLIC_URL + "/images/diagram.png"}
            alt="Logo"
            style={{ width: '50px', height: '50px' }}
          />
        </div>
      </div>
      <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/programming'>Programming</Link>
        <Link to='/dsasyllabus'>DSA Syllabus</Link>
        <Link to='/cheatsheet'>Cheatsheet</Link>
        <Link to='/queries'>Any queries</Link>
      </div>
      <div className="Header-right">
        <img
          src={process.env.PUBLIC_URL + "/images/bell_white.png"}
          alt="Bell"
          style={{ width: '40px', height: '40px', marginRight: '20px' }}
        />
        <img
          src={process.env.PUBLIC_URL + "/images/user.png"}
          alt="Bell"
          style={{ width: '45px', height: '45px', marginRight: '20px' }}
        />
      </div>
    </div>
  );
}

export default Navbar;
