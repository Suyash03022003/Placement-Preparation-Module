import React from 'react'
import styles from './User.module.css';
import { Routes, Route } from "react-router-dom";

import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import UserDashboard from './UserDashboard/userdashboard';
import UserProgress from './UserProgress/Progress';

const Profile = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  const handleLogout = () => {
    try {
      removeCookie("user");
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Error removing cookie:", error);
    }
  }

  return (
    <div className={styles.mainUserDiv}>
      <Routes>
        <Route path="/" element={<UserDashboard />} />
        <Route path="/user/progress" element={<UserProgress />} />
      </Routes>
      <div>Profile</div>
      <button onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default Profile