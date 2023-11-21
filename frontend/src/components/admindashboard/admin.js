import React from 'react';
import styles from './Admin.module.css';

import AdminDashboard from './AdminDashboard/AdminDashboard.js';
import AdminViewUsers from './AdminViewUsers/AdminViewUsers.js';
import AddContent from './AdminAddContent/AdminAddContent';
import { Routes, Route } from 'react-router-dom';

const Admin = () => {
  return (
    <div className={styles.mainAdminDiv}>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/addContent" element={<AddContent />} />
        <Route path="/user" element={<AdminViewUsers />} />
      </Routes>
    </div>
  )
}

export default Admin