import React from 'react';
export default function footer() {
  return (
    <footer className="footer">
    <div className="container">
      <div className="company-logo">
      <img src={process.env.PUBLIC_URL + "/images/diagram.png"} alt="Company Logo" />
      </div>
      <div className="footer-links">
        <ul>
        <h3>INFORMATION</h3>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Developers</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="follow-us">
        <h3>FOLLOW US ON</h3>
        <div className="social-media-icons">
          <a href="#"><i className="fab fa-facebook"></i>
          <img src={process.env.PUBLIC_URL + "/images/instagram.png"} style={{ width: '50px', height: '50px' }} />
          </a>
          <a href="#"><i className="fab fa-twitter"></i>
          <img src={process.env.PUBLIC_URL + "/images/linkedin (2).png"} style={{ width: '50px', height: '50px' }} />
          </a>
          <a href="#"><i className="fab fa-instagram"></i>
          <img src={process.env.PUBLIC_URL + "/images/youtube (2).png"} alt="Logo" style={{ width: '50px', height: '50px' }} />
          </a>
          <a href="#"><i className="fab fa-instagram"></i>
          <img src={process.env.PUBLIC_URL + "/images/telegram-8247.png"} alt="Logo" style={{ width: '50px', height: '50px' }} />
          </a>
        </div>
        <br></br>
        <div className='contact-us'>
        <h3>CONTACT US</h3>
        <ul>
        <li><img src="/telephone.png" alt="Logo" style={{ width: '20px', height: '20px' }} />
        1800-123-4567
        </li>
        <li><img src="/mail.png" alt="Logo" style={{ width: '20px', height: '20px' }} />
        contact@bitwardha.ac.in
        </li>
        </ul>
        </div>
      </div>
    </div>
  </footer>
  );
}
