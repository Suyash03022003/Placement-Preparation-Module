import React from 'react';
export default function Navbar() {
  return (
    <div className="nav">
      <div className="header-top">
        <div className="logo">
          <img src="/logo.png" alt="Logo" style={{ width: '70px', height: '50px' }} />
        </div>
        <div className="Header-right">
          <img src="/bell.png" alt="Bell" style={{ width: '30px', height: '50px',marginRight: '30px' }} />
          <button className="button">LOGIN</button>
        </div>
      </div>

      <div className="links">
        <a href="index.html" className="link">Home</a>
        <a href="/" className="link">Programming</a>
        <a href="/" className="link">DSA Syllabus</a>
        <a href="/" className="link">Cheatsheet</a>
        <a href="/" className="link">Any queries</a>
      </div>
    </div>
  );
}
