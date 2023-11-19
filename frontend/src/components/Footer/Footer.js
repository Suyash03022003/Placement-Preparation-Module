import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerMainLogo}>
                <img className='footer-logo-img' src={process.env.PUBLIC_URL + "/images/diagram.png"} alt="Company Logo" />
            </div>

            <div className={styles.footerLinks}>
                <ul>
                    <p className={styles.footerHead}>INFORMATION</p>
                    <div className={styles.footerLinksDivs}>
                        <div>
                            <li><Link to="/" className={styles.footerSeperateLink}>Home</Link></li>
                            <li><Link to="/" className={styles.footerSeperateLink}>About Us</Link></li>
                            <li><Link to="/" className={styles.footerSeperateLink}>FAQs</Link></li>
                        </div>
                        <div>
                            <li><Link to="/" className={styles.footerSeperateLink}>Developers</Link></li>
                            <li><Link to="/" className={styles.footerSeperateLink}>Contact Us</Link></li>
                        </div>
                    </div>
                </ul>
            </div>

            <div className={styles.socialMediaLinks}>
                <div className={styles.socialMediaIcons}>
                    <p className={styles.footerHead}>FOLLOW US ON</p>
                    <img src={process.env.PUBLIC_URL + "/images/instagram.png"} style={{ width: '50px', height: '50px' }} />
                    <img src={process.env.PUBLIC_URL + "/images/linkedin (2).png"} style={{ width: '50px', height: '50px' }} />
                    <img src={process.env.PUBLIC_URL + "/images/youtube (2).png"} alt="Logo" style={{ width: '50px', height: '50px' }} />
                    <img src={process.env.PUBLIC_URL + "/images/telegram-8247.png"} alt="Logo" style={{ width: '50px', height: '50px' }} />
                </div>
                <div className={styles.footerContactUs}>
                    <p className={styles.footerHead}>CONTACT US</p>
                    <ul>
                        <a href="tel:1800-123-4567"><li><span><img src={process.env.PUBLIC_URL + "/images/contact.png"} alt="Logo" style={{ width: '20px', height: 'auto' }} /></span>
                            1800-123-4567
                        </li></a>
                        <a href="mailto:contact@bitwardha.ac.in"><li><span><img src={process.env.PUBLIC_URL + "/images/mail.png"} alt="Logo" style={{ width: '20px', height: 'auto' }} /></span>
                            contact@bitwardha.ac.in
                        </li></a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer