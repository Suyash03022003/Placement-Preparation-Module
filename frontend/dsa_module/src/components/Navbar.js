import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, createBrowserRouter } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()

  return (
    <div className="nav">
    <div className="header-top">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/images/diagram.png"} alt="Logo" style={{ width: '50px', height: '50px' }} />
      </div>
    </div>
      <div className="links">
        <Link to='/'> Home </Link>
        <Link to='/programming'> Programming </Link>
        <Link to='/dsasyllabus'> DSA Syllabus </Link>
        <Link to='/cheatsheet'> Cheatsheet </Link>
        <Link to='/queries'> Any queries</Link>

      </div>

      <div className="Header-right">
          <img src="/bell.png" alt="Bell" style={{ width: '30px', height: '50px', marginRight: '30px' }} />
          <button className="button">LOGIN</button>
        </div>

    </div>
  );
}

export default Navbar