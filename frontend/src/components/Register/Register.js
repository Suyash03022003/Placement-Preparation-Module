import React, { useState } from 'react';
import Aside from '../../assets/Login.png';
import BitLogo from '../../assets/NewLogo.jpg';
import styles from './Register.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
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
      const object = formData;
      axios.post('http://localhost:5000/user', object);
      window.alert("Registered Successfully");
      navigate('/login');
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

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
                    name="name"
                    onChange={handleInputChange}
                    className={styles.inputText}
                    required
                  />
                  <span className={styles.floatingLabel}>Enter Name</span>
                </div>
                <div className={styles.userInputWrp}>
                  <input
                    type="text"
                    name="email"
                    onChange={handleInputChange}
                    className={styles.inputText}
                    required
                  />
                  <span className={styles.floatingLabel}>Enter Email</span>
                </div>
                <div className={styles.userInputWrp} style={{ marginBottom: '5px' }}>
                  <input
                    type="text"
                    name="password"
                    onChange={handleInputChange}
                    className={styles.inputText}
                    required
                  />
                  <span className={styles.floatingLabel}>Set Password</span>
                </div>
                <Link to="/login">Already a User, Login!</Link>
                <input type="submit" id={styles.btn} value="Register" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;