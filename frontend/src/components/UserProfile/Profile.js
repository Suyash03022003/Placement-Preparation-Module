import React from 'react'
import styles from './User.module.scss';
import { Routes, Route } from "react-router-dom";
import UserDashboard from './UserDashboard/userdashboard';
import UserProgress from './UserProgress/Progress';
import UserLogout from './UserLogout/UserLogout.js';
import UserSidebar from "./UserSidebar/usersidebar";
import UserNavbar from "./UserNavbar/usernavbar";

const Profile = () => {

  return (
    <div className={styles.mainAdminHome}>
      <UserSidebar />
      <div className={styles.mainAdminHomeBody}>
        <UserNavbar />
          <Routes>
            <Route path="/" element={<UserDashboard />} />
            <Route path="/progress" element={<UserProgress />} />
            <Route path="/logout" element={<UserLogout />} />
          </Routes>
      </div>
    </div>
  )
}

export default Profile