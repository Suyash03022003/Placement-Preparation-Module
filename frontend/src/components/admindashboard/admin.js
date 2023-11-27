import React from 'react';
import styles from './Admin.module.scss';
import AdminSidebar from "./AdminSidebar/AdminSidebar";
import AdminNavbar from "./AdminNavbar/AdminNavbar";
import AdminProfile from './AdminProfile/Profile.js';
import AdminDashboard from './AdminDashboard/AdminDashboard.js';
import AdminViewUsers from './AdminViewUsers/AdminViewUsers.js';
import AddInterviewQue from './AdminAddContent/AdminAddInterviewQue.js';
import AddProgQue from './AdminAddContent/AdminAddProgQue.js';
import AddContent from './AdminAddContent/AdminAddContent';
import { Routes, Route } from 'react-router-dom';

const Admin = () => {
  return (
    <div className={styles.mainAdminHome}>
      <AdminSidebar />
      <div className={styles.mainAdminHomeBody}>
        <AdminNavbar />
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/addContent" element={<AddContent />} />
            <Route path="/user" element={<AdminViewUsers />} />
            <Route path="/profile" element={<AdminProfile />} />
            <Route path="/addquiz" element={<AddInterviewQue />} />
            <Route path="/addprogquiz" element={<AddProgQue />} />
          </Routes>
      </div>
    </div>
  )
}

export default Admin