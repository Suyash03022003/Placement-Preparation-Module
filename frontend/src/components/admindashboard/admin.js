import React from 'react';
import styles from './Admin.module.css';
import AdminNavbar from './AdminNavbar/AdminNavbar.js';
import AdminDashboard from './AdminDashboard/AdminDashboard.js';
import AdminViewUsers from './AdminViewUsers/AdminViewUsers.js';
import AdminAddContent from './AdminAddContent/AdminAddContent';
import { Routes, Route } from 'react-router-dom';

const Admin = () => {
  return (
    <div className={styles.mainAdminDiv}>
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/addContent" element={<AdminAddContent />} />
        <Route path="/viewUsers" element={<AdminViewUsers />} />
      </Routes>
    </div>
  )
}

export default Admin