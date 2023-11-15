import React, { useState } from 'react';
import Aside from '../../assets/bajaj1.jpg';
import BitLogo from '../../assets/bitlogo.jpg';
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({setUser}) => {
    const navigate = useNavigate();

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
                alert(res.data.message)
                if(res.data.message === "Login successful!") {
                    setUser(res.data.user);
                    navigate("/");
                }
                else if(res.data.message === "User Not Registered!")
                    navigate("/register");
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
                        <img src={Aside} alt="BITW" />
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
