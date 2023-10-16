import React from 'react';
import { Link } from 'react-router-dom';
export default function footer() {
  return (
    <footer className="footer">
      {/* <div className="container"> */}
        <div className="footer-logo">
          <img className='footer-logo-img' src={process.env.PUBLIC_URL + "/images/diagram.png"} alt="Company Logo" />
        </div>

        <div className="footer-links">
          <ul>
            <h2>INFORMATION</h2>
            <br></br>
            <li><Link to="/" className='sep-link-footer'>Home</Link></li>
            <li><Link to="/" className='sep-link'>About Us</Link></li>
            <li><Link to="/" className='sep-link'>FAQs</Link></li>
            <li><Link to="/" className='sep-link'>Developers</Link></li>
            <li><Link to="/" className='sep-link'>Contact Us</Link></li>

          </ul>
        </div>

        <div className="social-media">
          <h2>FOLLOW US ON</h2>
          <br></br>
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
            <h2>CONTACT US</h2>
            <br></br>
            <ul>
              <li><img src="/telephone.png" alt="Logo" style={{ width: '20px', height: '20px' }} />
               : 1800-123-4567
              </li>
              <li><img src="/email.png" alt="Logo" style={{ width: '20px', height: '20px' }} />
                : contact@bitwardha.ac.in
              </li>
            </ul> 
          </div>

        </div>
      {/* </div> */}
    </footer>
  );
}
