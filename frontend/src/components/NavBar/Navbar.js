import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './Navbar.module.css';
import { useCookies } from 'react-cookie';

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
        width
    };
}

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcon] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [activeLink, setActiveLink] = useState(getActiveLinkFromStorage() || 'Home');
    const [cookies, setCookie] = useCookies(['user']);
    const [fname, setFname] = useState("");

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setShowMediaIcon(false);
        saveActiveLinkToStorage(link);
    };

    useEffect(() => {
        if (cookies.user && cookies.user.name) {
            const gettingFirstName = cookies.user.name.split(" ")[0];
            setFname(gettingFirstName);
        }
    }, [cookies.user]);

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function getActiveLinkFromStorage() {
        return localStorage.getItem('activeLink');
    }

    function saveActiveLinkToStorage(link) {
        localStorage.setItem('activeLink', link);
    }

    return (
        <>
            <nav className={styles.mainNav}>
                {/* <div className={styles.mainNavFirstDiv}> */}
                <div className={styles.navLogo}>
                    <img
                        src={process.env.PUBLIC_URL + '/images/new-logo.jpg'}
                        alt="Logo"
                        className={styles.navbarImageLogo}
                        style={{ width: '50px', height: '50px' }}
                    />
                </div>

                <div className={windowDimensions.width <= 1024 && showMediaIcons ? styles.mobileMenuLink : styles.navLinks}>
                    <ul>
                        <li>
                            <Link to="/user/" preventScrollReset={false} className={`${styles.navSeperateLinks} ${activeLink === 'Home' ? styles.active : ''}`} onClick={() => handleLinkClick('Home')}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/dsasyllabus" preventScrollReset={false} className={`${styles.navSeperateLinks} ${activeLink === 'DSASyllabus' ? styles.active : ''}`} onClick={() => handleLinkClick('DSASyllabus')}>
                                Roadmap
                            </Link>
                        </li>
                        <li className={styles.dropdownLinks}>
                            <Link to="#" preventScrollReset={false} className={`${styles.navSeperateLinks} ${activeLink === 'Prepare' ? styles.active : ''}`} >
                                Prepare
                            </Link>
                            <ul>
                                <Link to="/user/learnDSA" preventScrollReset={false} className={`${styles.navSeperateLinks}`} onClick={() => handleLinkClick('Prepare')} >
                                    <li>Learn DSA</li>
                                </Link>

                                <Link to="/user/quizzes" preventScrollReset={false} className={`${styles.navSeperateLinks}`} onClick={() => handleLinkClick('Prepare')} >
                                    <li>Quizzes</li>
                                </Link>

                                <Link to="/user/interviewques" preventScrollReset={false} className={`${styles.navSeperateLinks}`} onClick={() => handleLinkClick('Prepare')} >
                                    <li>Interview Questions</li>
                                </Link>
                            </ul>
                            {/* <Link to="/user/dsasyllabus" preventScrollReset={false} className={`${styles.navSeperateLinks} ${activeLink === 'DSASyllabus' ? styles.active : ''}`} onClick={() => handleLinkClick('DSASyllabus')}> */}
                            {/* </Link> */}
                        </li>
                        <li>
                            <Link to="/user/programming" preventScrollReset={false} className={`${styles.navSeperateLinks} ${activeLink === 'Programming' ? styles.active : ''}`} onClick={() => handleLinkClick('Programming')}>
                                Problems
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/cheatsheet" preventScrollReset={false} className={`${styles.navSeperateLinks} ${activeLink === 'Cheatsheet' ? styles.active : ''}`} onClick={() => handleLinkClick('Cheatsheet')}>
                                Cheatsheet
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/discuss" preventScrollReset={false} className={`${styles.navSeperateLinks} ${activeLink === 'Discuss' ? styles.active : ''}`} onClick={() => handleLinkClick('Discuss')}>
                                Discuss
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* </div> */}

                <div className={styles.navLoginLink}>
                    <div className={styles.navLoginLinkDesktop}>
                        <div>
                            <img
                                src={process.env.PUBLIC_URL + '/images/bell_white.png'}
                                alt="Bell"
                                className={styles.navbarBellImage}
                                style={{ width: '35px', height: '35px' }}
                            />
                        </div>
                        <Link to={fname !== "" ? "/user/profile" : "/login"} className={styles.navLoginLinkDesktopHref} onClick={() => handleLinkClick('Login')}>
                            <div className={styles.navLoginLinkDesktopHrefInnerDiv}>
                                <img
                                    src={process.env.PUBLIC_URL + '/images/user.png'}
                                    alt="User"
                                    className={styles.navbarHamburgerImage}
                                    style={{ width: '40px', height: '40px' }}
                                />
                            </div>
                        </Link>
                    </div>
                    <div className={styles.navLoginLinkMobile} onClick={() => setShowMediaIcon(!showMediaIcons)}>
                        <GiHamburgerMenu className={styles.hamburgerNavbar} />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
