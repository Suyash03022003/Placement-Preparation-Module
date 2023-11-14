import React, { useState } from 'react';
import styles from './Login.module.css'; // Import your CSS file

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission here and use the formData.
    // For example, you can send it to an API or display it in the component.
    console.log('Form submitted with data:', formData);
  };

  return (
    <>
      <div className={styles.mainDivForm}>
        <div className={styles.innerMainDivForm}>
          <h2>LOGIN</h2>
          <form onSubmit={handleSubmit} className={styles.mainLoginFormDiv}>
            <div>
              <label htmlFor="name">Email:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Password:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </div>
          </form>
          {/* <div className={styles.left}></div>
          <div className={styles.right}></div> */}
        </div>
      </div>
      {/* <div className={styles.mainDivForm}>
        <div className={styles.innerFormDiv}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
}

export default Login;
