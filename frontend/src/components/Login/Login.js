import React, { useState } from 'react';
import Aside from '../../assets/Login.png';
import BitLogo from '../../assets/NewLogo.jpg';
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from "react-cookie";

const Login = () => {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['user']);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            axios.post("http://localhost:5000/user/login", formData)
                .then(res => {
                    if (res.data.message === "Login successful!") {
                        setCookie('user', res.data.user, { path: '/' });
                        if(res.data.user.role === "Admin")
                            navigate('/admin');
                        else { 
                            navigate("/");
                            localStorage.setItem('activeLink', 'Home');
                        }
                    } else if (res.data.message === "User Not Registered!") {
                        alert(res.data.message);
                        navigate("/register");
                    } else {
                        alert(res.data.message);
                    }
                })
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <div className={styles.login}>
                <div className={styles.form}>
                    <div className={styles.frm}>
                        <img src={Aside} alt="BITW" className={styles.loginImage} />
                        <div className={styles.content}>
                            <img src={BitLogo} alt="BIT Logo" />
                            <form onSubmit={handleSubmit}>
                                <div className={styles.userInputWrp} style={{ marginBottom: '5px' }}>
                                    <input
                                        type="text"
                                        name="email"
                                        onChange={handleInputChange}
                                        className={styles.inputText}
                                        required
                                    />
                                    <span className={styles.floatingLabel}>Enter Email</span>
                                </div>
                                <div className={styles.userInputWrp}>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleInputChange}
                                        className={styles.inputText}
                                        required
                                    />
                                    <span className={styles.floatingLabel}>Enter Password</span>
                                </div>
                                <Link to="/register">Register Now</Link>
                                <input type="submit" id={styles.btn} value="Login" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
